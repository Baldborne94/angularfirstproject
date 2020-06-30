import { AbstractControl } from '@angular/forms'


export const equalValidator = (k1: string, k2:string) =>{
    return (g: AbstractControl)=>{
        if(g.get(k1).value !== g.get(k2).value){
            return {
                equal:true
            };
        }
    };
}