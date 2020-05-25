import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/formulario' },
  { path: 'blog', component: BlogComponentComponent },
  { path: 'formulario', component: FormularioComponentComponent },
  { path: '**', redirectTo: '/blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
