import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;
  beforeEach(() => {
    cliente = new Cliente(
      'José da Silva',
      10000,
      new Date('2023-04-29T10:38:36'),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  describe('creditoPreAprovado', () => {

    it('não deve liberar crédito para clientes de baixo saldo', () => {
      cliente.saldo = 9999.99;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

    it('deve liberar R$ 20.000 de crédito para clientes de alto saldo', () => {
      cliente.saldo = 10000.00;
      expect(cliente.creditoPreAprovado).toBe(20000);
    });

  });

});
