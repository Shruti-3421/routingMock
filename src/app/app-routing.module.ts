import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";

const routes: Routes =[
   {
    path: '',
    component : HomeComponent
   },
   {
    path: 'products',
    component : ProductsComponent
   },
   {
    path: 'users',
    component : UsersComponent
   },
   {
    path: 'page-not-found',
    component : PageNotFoundComponent
   },
   {
    path: '**',
    redirectTo: 'page-not-found'
   }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}