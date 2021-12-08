import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Coin } from '../interface/coin.interface';

@Component({
  selector: 'app-listcoin',
  templateUrl: './listcoin.component.html',
  styleUrls: ['./listcoin.component.css']
})
export class ListcoinComponent implements OnInit {

  coins: Coin[] = [];
  titulos: string[] = [
    '#',
    'Moneda',
    'Precio',
    '24 h',
    'Volumen total',
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCoins()
      .subscribe((api: any) => {
        console.log('Conecto 😄', api.coins);
        this.coins = api.coins;
      }, err => {
        console.log('Upsss 😢', err);
      });;
  }
}
