import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
const routes: Routes = [
  {
    path:'lazyload' ,loadChildren:()=>import('./lazyload/lazyload.module').then(mod=>mod.LazyloadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
