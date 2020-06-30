import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HighlightDirective } from './directives/highlight.directive';

import{ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './services/product.service';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosListElementComponent } from './components/todos-list-element/todos-list-element.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListElementComponent } from './components/users-list-element/users-list-element.component';

@NgModule({
  // dentro il declaration ci vanno i componenti e le direttive
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    HighlightDirective,
    LoginComponent,
    LoginNewComponent,
    HomeComponent,
    TodosListComponent,
    TodosListElementComponent,
    UsersListComponent,
    UsersListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // ProductService
    {
      provide: ProductService,
      useClass: ProductService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
