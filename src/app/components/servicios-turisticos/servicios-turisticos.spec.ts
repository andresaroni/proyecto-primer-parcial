import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTuristicos } from './servicios-turisticos';

describe('ServiciosTuristicos', () => {
  let component: ServiciosTuristicos;
  let fixture: ComponentFixture<ServiciosTuristicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosTuristicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosTuristicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
