import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import {Product} from 'src/app/models/product';
@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // passiamo il model creato
@Input() public product: Product;
//@Input()  public title: string;
//@Input()  public price: number;

@Output() public removeProduct: EventEmitter<Product> = new EventEmitter();
  // Output() é un decorator
@Output() public addToCart: EventEmitter<number> = new EventEmitter();
@Output() public removeToCart: EventEmitter<number> = new EventEmitter();

public handleClick(e : MouseEvent): void{
  //alert('Aggiunto al carrello');
  console.log(`X:${e.clientX} Y:${e.clientY}`);
  this.addToCart.emit(0);
}

public handleClick2(e : MouseEvent): void{
  //alert('Aggiunto al carrello');
  //console.log(`X:${e.clientX} Y:${e.clientY}`);
  this.removeToCart.emit(0);
}

public handleClick3(e : MouseEvent): void{
  //alert('Aggiunto al carrello');
  //console.log(`X:${e.clientX} Y:${e.clientY}`);
  this.removeProduct.emit(this.product);
}

  constructor() { }

  ngOnInit(): void {
  }

}
