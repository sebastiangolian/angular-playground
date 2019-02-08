import { AbstractControl } from '@angular/forms';

interface ValidationResponse {
  [key: string]: any | null;
}

export function forbiddenEmail(control: AbstractControl): ValidationResponse {
  const forbiddenEmails = ['wp@wp.pl', 'admin@wp.pl'];
  const status = forbiddenEmails.includes(control.value);
  return status ? { forbiddenEmail: true } : null;
}
