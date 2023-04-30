import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css'],
})
export class ConsultaSaldoComponent implements OnInit {

  public cliente: Cliente = new Cliente(
    1,
    'Maria das Couves',
    99.99,
    new Date(),
  );

  constructor(
  ) {
  }

  public ngOnInit(): void {
  }

  /**
   * Calcula a classe CSS correspondente ao valor especificado, retornando:
   * * `'zero'` se o valor absoluto for menor que 1 centavo;
   * * `'negativo'` se o valor for igual ou menor a -1 centavo;
   * * `'positivo'` se o valor for igual ou maior a 1 centavo.
   *
   * @param valor Valor (em unidades monetárias) para o qual será calculada a
   *              classe correspondente.
   */
  public classNamePorValor(valor: number): ('zero' | 'negativo' | 'positivo') {
    if (valor >= 0.005) {
      return 'positivo';
    } else if (valor <= -0.005) {
      return 'negativo';
    } else {
      return 'zero';
    }
  }

}
