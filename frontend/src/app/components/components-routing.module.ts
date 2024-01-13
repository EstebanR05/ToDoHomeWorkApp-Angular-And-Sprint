import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'principal', component: PrincipalComponent },
        {
          path: '**', redirectTo: 'principal'
        }
      ]
    }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModule { }
