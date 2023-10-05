import {AbstractControl, ValidationErrors} from '@angular/forms'

export function invalidCodigoValidator(control:AbstractControl):ValidationErrors|null{
  if (!control.value) {
    return null;  // Si el campo está vacío, no hay error.
  }
  const codigoPattern = /^[A-Z]+-\d+$/;

  if (!codigoPattern.test(control.value)) {
    return { 'codigoInvalido': true };  // Retorna un objeto indicando el error.
  }

  return null; 
}