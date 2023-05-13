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

  public jose: Cliente = new Cliente(
    8,
    'José da Silva',
    999.99,
    new Date(),
  );

  public clientes: Cliente[] = [
    this.maria,
    this.jose,
  ];

  public clienteSelecionado?: Cliente;

  constructor(
  ) {
  }

  public ngOnInit(): void {
  }

}
