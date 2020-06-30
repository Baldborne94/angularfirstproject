import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag fatto in questo modo <app-root></app-root> crea un'istanza
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showProducts = true;
  title = 'eng-angular-base';
  public changeTitle(): void{
    if(this.title === ' Titolo cambiato'){
      alert('Titolo cambiato');
    }else{
      alert('Stesso titolo');
    }

  }

  constructor(){
    setTimeout(() => this.title = 'Titolo cambiato', 6000);
    setInterval(() => this.showProducts = !this.showProducts, 2000);
  }
}
