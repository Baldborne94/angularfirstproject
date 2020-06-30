import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public cart = 0;
  // tipiziamo come array
  public products : Product[];


  constructor(public productService: ProductService) { 
    this.products = [
      new Product('Oggetto1', 19.99),
      new Product('Oggetto2', 19.99),
      new Product('Oggetto3', 19.99)
    ];
  }
  

  
  public handleAddToCart(): void{
    //alert('Aggiunto al carrello!!')
    this.cart++;
  }

  public handleRemoveToCart(): void{
    this.cart = this.cart -1;
  }

  public handleRemoveProduct(p: Product): void{
    this.products.splice(this.products.indexOf(p),1);
  }

  ngOnInit(): void {
  }

}
