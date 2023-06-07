/*
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function prohibited(forbiddenRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const forbiddenMatch = forbiddenRegex.test(value);
    return forbiddenMatch ? { forbiddenValue: { value } } : null;
  };
}
*/


// Here's code not using @angular/forms

export function prohibited(forbiddenRegex: RegExp): any {
  return (control: any): { [key: string]: any } | null => {
    const value = control.value;
    const forbiddenMatch = forbiddenRegex.test(value);
  
    if (forbiddenMatch) {
      return { forbiddenValue: { value } };
    }
  
    return null;
  };
}