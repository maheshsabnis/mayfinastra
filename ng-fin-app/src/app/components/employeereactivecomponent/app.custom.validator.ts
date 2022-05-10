import { AbstractControl } from "@angular/forms";

// the method MUST be static for Custom validations
export class CustomValidator {
  static checkEven(ctrl:AbstractControl):any {
    if(parseInt(ctrl.value) %2 === 0)
      return null; // Valid
    else
      return  {odd:true}; // odd is a custom error property returned through JSON
  }
}
