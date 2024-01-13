import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./platform/platform.module').then( m => m.PlatformModule )
  },
  { 
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule )
  },
  {
    path: '**',
    redirectTo: 'components'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
