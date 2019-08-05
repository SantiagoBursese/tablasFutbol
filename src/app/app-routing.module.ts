import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PosicionesComponentComponent} from "src/app/posiciones-component/posiciones-component.component";

const routes: Routes = [
  {path: '', redirectTo: 'posiciones/ARG',pathMatch: "full"},
  {path: 'posiciones/:pais', component: PosicionesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
