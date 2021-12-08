import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Coin } from './interface/coin.interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
}
