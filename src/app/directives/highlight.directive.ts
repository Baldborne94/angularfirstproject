import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// la direttiva non ha una parte inerente al template
@Directive({
  // selettore con [] é un selettore attributo
  // non si puó invocare la direttiva attraverso un tag, ma solo attraverso un attributo posto su un elememnto 
  // giá esistente
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') public color: string;

  private _prevColor: string;

  changeColor: boolean;
  constructor(private _elRef: ElementRef<HTMLElement>) { 
    //ElementRef contiene un elemento presente nella direttiva
  }

// decorator  hostlistener (ascolta l'elemento su cui ho posizionato la direttiva) 
//viene evocato  all'evento del mouseover
@HostListener('mouseover')  
  public handleMouseOver(): void{
    //onsole.log(this._elRef.nativeElement.style.backgroundColor);
    this._prevColor = this._elRef.nativeElement.style.backgroundColor;
    this._elRef.nativeElement.style.backgroundColor = this.color;

  }
  @HostListener('mouseout')  
  public handleMouseOut(): void{
    //console.log(this._elRef.nativeElement.style.backgroundColor);
    this._elRef.nativeElement.style.backgroundColor = this._prevColor;


  }

}