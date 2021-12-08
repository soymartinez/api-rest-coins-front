import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interface/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_REST = 'http://34.125.7.41:8116/coins';
  
  constructor(private http: HttpClient) { }
  
  getCoins() {
    return this.http.get<Response>(this.API_REST)
  }

  postCoins(coin: Coin[]) {
    return this.http.post<Response>(this.API_REST, coin)
  }

}
