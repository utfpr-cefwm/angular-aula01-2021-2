import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('classNamePorValor', () => {

    it('deve apontar classe "zero" para 0', () => {
      expect(component.classNamePorValor(0)).toBe('zero');
    });

    it('deve apontar classe "negativo" para -0.005', () => {
      expect(component.classNamePorValor(-0.005)).toBe('negativo');
    });

    it('deve apontar classe "zero" para -0.004', () => {
      expect(component.classNamePorValor(-0.004)).toBe('zero');
    });

    it('deve apontar classe "negativo" para -1', () => {
      expect(component.classNamePorValor(-1)).toBe('negativo');
    });

    it('deve apontar classe "zero" para 0.004', () => {
      expect(component.classNamePorValor(0.004)).toBe('zero');
    });

    it('deve apontar classe "positivo" para 0.005', () => {
      expect(component.classNamePorValor(0.005)).toBe('positivo');
    });

    it('deve apontar classe "positivo" para 1', () => {
      expect(component.classNamePorValor(+1)).toBe('positivo');
    });

  });

});
