import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';

const routes: Routes = [
  { path: 'materias', component: MateriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
