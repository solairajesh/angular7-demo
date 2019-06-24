import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
//import { ToyService } from './toy.service';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeaderComponent, FooterComponent, BannerComponent, FeaturedProductComponent, ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRouterModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
