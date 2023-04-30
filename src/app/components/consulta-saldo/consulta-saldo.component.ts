import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css'],
})
export class ConsultaSaldoComponent implements OnInit {

  public maria: Cliente = new Cliente(
    1,
    'Maria das Couves',
    99999.99,
    new Date(),
  );

  constructor(
  ) {
  }

  public ngOnInit(): void {
  }

}
