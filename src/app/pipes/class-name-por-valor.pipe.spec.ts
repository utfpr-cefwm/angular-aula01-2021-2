import { ClassNamePorValorPipe } from './class-name-por-valor.pipe';

describe('ClassNamePorValorPipe', () => {

  let pipe: ClassNamePorValorPipe;
  beforeEach(() => {
    pipe = new ClassNamePorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('deve apontar classe "zero" para 0', () => {
      expect(pipe.transform(0)).toBe('zero');
    });

    it('deve apontar classe "negativo" para -0.005', () => {
      expect(pipe.transform(-0.005)).toBe('negativo');
    });

    it('deve apontar classe "zero" para -0.004', () => {
      expect(pipe.transform(-0.004)).toBe('zero');
    });

    it('deve apontar classe "negativo" para -1', () => {
      expect(pipe.transform(-1)).toBe('negativo');
    });

    it('deve apontar classe "zero" para 0.004', () => {
      expect(pipe.transform(0.004)).toBe('zero');
    });

    it('deve apontar classe "positivo" para 0.005', () => {
      expect(pipe.transform(0.005)).toBe('positivo');
    });

    it('deve apontar classe "positivo" para 1', () => {
      expect(pipe.transform(+1)).toBe('positivo');
    });

  });

});
