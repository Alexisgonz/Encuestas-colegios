import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'list',
    loadChildren: () =>
    import('./components/encuestas-form/encuestas-form.module').then(
      (m) => m.EncuestasFormModule
    )
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class EncuestasModule { }
