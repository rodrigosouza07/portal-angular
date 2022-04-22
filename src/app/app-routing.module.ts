import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';

const routes: Routes = [
  { path: '', component: MateriasComponent },
  {
      path: 'materias',
      loadChildren:() => import('./materias/materias.component').then(m => m.MateriasComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
