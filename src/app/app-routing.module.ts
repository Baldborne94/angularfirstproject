import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosListElementComponent } from './components/todos-list-element/todos-list-element.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListElementComponent } from './components/users-list-element/users-list-element.component';


const routes: Routes = [{
  component:LoginComponent,
  path:'login'
},
{
  component: LoginNewComponent,
  path:'loginNew'
},
{
  component: ProductComponent,
  path: 'product'
},
{
  component:ProductsListComponent,
  path: 'productList'
},
{
  component: HomeComponent,
  path:'',
  pathMatch: 'full'
},
{
  component: TodosListComponent,
  path: 'todos'
},
{
  component: TodosListElementComponent,
  path: 'todos/:id'
},
{
  component:UsersListComponent,
  path:'users'
}, {
  component: UsersListElementComponent,
  path: 'users/:id'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
