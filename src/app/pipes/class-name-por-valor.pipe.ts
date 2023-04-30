import { Pipe, PipeTransform } from '@angular/core';

const CLASSES_PADRAO = {
  positivo: 'positivo',
  negativo: 'negativo',
  zero: 'zero',
};

export type ClassNamesDeValor = Partial<typeof CLASSES_PADRAO>;

@Pipe({
  name: 'classNamePorValor',
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Calcula a classe CSS correspondente ao valor especificado, retornando:
   * * `'zero'` se o valor absoluto for menor que 1 centavo;
   * * `'negativo'` se o valor for igual ou menor a -1 centavo;
   * * `'positivo'` se o valor for igual ou maior a 1 centavo.
   *
   * @param valor Valor (em unidades monetárias) para o qual será calculada a
   *              classe correspondente.
   */
  public transform(
    valor: number,
    classes: ClassNamesDeValor = CLASSES_PADRAO,
  ): string {
    if (valor >= 0.005) {
      return classes.positivo || 'positivo';
    } else if (valor <= -0.005) {
      return classes.negativo || 'negativo';
    } else {
      return classes.zero || 'zero';
    }
  }

}
