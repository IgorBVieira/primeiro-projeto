import { TemplateLiteral } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'my-first-component',
  template: ` <p>Meu primeiro Component com angular 2!</p> `,
})
export class MyFirstComponent {}
