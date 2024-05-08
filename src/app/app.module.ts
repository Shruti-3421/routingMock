import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProductsComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
