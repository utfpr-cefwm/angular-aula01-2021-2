import { Component, Input, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

const CLASSES = {
  positivo: 'credito positivo',
};

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
})
export class CardClienteComponent implements OnInit {

  @Input()
  public cliente?: Cliente;

  constructor(
  ) {
  }

  public ngOnInit(): void {
  }

  public get clss(): Partial<{
    positivo: string;
    negativo: string;
    zero: string;
  }> {
    return CLASSES;
  };

}
