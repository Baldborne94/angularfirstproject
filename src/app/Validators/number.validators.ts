import { AbstractControl } from '@angular/forms'


export const rangeValidator = (min: number, max:number) =>{
    return (c: AbstractControl)=>{
        if(c.value <min || c.value >max){
            return {
                range:true
            };
        }
    };
}
