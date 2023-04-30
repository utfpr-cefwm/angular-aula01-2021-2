export class Cliente {

  constructor(
    /**
     * Nome completo do cliente (nome + sobrenome).
     */
    public nome: string,

    /**
     * Saldo em reais do cliente.
     */
    public saldo: number,

    /**
     * Data de último acesso (último login) do cliente.
     */
    public ultimoAcesso: Date,
  ) {
  }

  /**
   * Crédito pré-aprovado automaticamente para o cliente em função de seu saldo.
   */
  public get creditoPreAprovado(): number {
    if (this.saldo >= 10000) {
      return 20000;
    } else {
      return 0;
    }
  }

}

