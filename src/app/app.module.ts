import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/app.footer.component';
import { CardComponent } from './card/card.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { ProductsComponent } from './products/products.component';
import { UsersProductsComponent } from './users-products/users-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    UserlistingComponent,
    ProductsComponent,
    UsersProductsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    UserDetailComponent,
    FormsComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
