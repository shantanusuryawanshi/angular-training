import { FormsComponent } from './forms/forms.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersProductsComponent } from './users-products/users-products.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users-listing', component: UserlistingComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'users-products', component: UsersProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'template-forms', component: FormsComponent},
  {path: 'reactive-forms', component: ReactiveformsComponent},
  {path: 'product-detail',
    children: [
      {path: 'product1', component: ProductDetailsComponent},
      {path: 'product2', component: ProductDetailsComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
