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

});
