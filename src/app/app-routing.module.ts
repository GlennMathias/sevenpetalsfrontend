import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
{path:"home",component:HomeComponent},
{path:"product",component:ProductComponent},
{path:"products",component:ProductsComponent},
{path:"*",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
