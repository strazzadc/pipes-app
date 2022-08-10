import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'deborah';
  nombreUpper: string = 'DEBORAH';
  nombreCompleto: string = 'deborah strazza';

  fecha: Date = new Date();
}
