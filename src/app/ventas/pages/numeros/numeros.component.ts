import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent {
  ventasNetas: number = 9876543.7645;
  porcentaje: number = 0.48;
}
