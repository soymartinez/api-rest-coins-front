import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { ListcoinComponent } from './listcoin/listcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListcoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
