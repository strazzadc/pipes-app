import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Deborah';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarPersona() {
    (this.nombre = 'Martin'), (this.genero = 'masculino');
  }
  // i18nPlural
  clientes: string[] = ['Maria', 'Pepe', 'Moni'];

  clientesMapa = {
    '=0': ' no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Ironman',
      vuela: true,
    },
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Hulk',
      vuela: false,
    },
  ];

  // keyValue Pipe
  persona = {
    nombre: 'Donatella',
    edad: 15,
    direccion: 'Avda. Siemprevivda 345',
  };

  // async Pipe --> se subscribe a si mismo
  //mediante observable
  miObservable = interval(1000); // 0, 1, 2, 3.....1000
  //mediante promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
