import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReserva } from './registro-reserva';

describe('RegistroReserva', () => {
  let component: RegistroReserva;
  let fixture: ComponentFixture<RegistroReserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroReserva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroReserva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
