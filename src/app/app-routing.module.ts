import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddComponent } from "./add/add.component";
import { ListcoinComponent } from "./listcoin/listcoin.component";

const routes: Routes = [
    { path: '', component: ListcoinComponent },
    { path: 'agregar', component: AddComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }