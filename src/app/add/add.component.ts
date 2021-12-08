import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coin } from '../interface/coin.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form!: FormGroup;

  constructor(private api: ApiService,
              private formBuilder: FormBuilder,
              private routes: Router,
              private toast: ToastController) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      symbol: '',
      image: '',
      current_price: null,
      price_change_percentage_24h: null,
      total_volume: null
    })
  }
  
  async agregar(form: Coin[]) {
    console.log(form);
    this.api.postCoins(form)
      .subscribe(async data => {
        console.log('Se a agregado 🚩', data);
        const toast = await this.toast.create({
          position: 'top',
          duration: 2000,
          cssClass: 'toast-success',
          message: 'Se ha agregado correctamente 🙃'
        });
        toast.present();
        setTimeout(() => {
          this.routes.navigate(['']);
        }, 2000);
      })
  }  
}
