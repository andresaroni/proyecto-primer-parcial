import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTurista } from './registro-turista';

describe('RegistroTurista', () => {
  let component: RegistroTurista;
  let fixture: ComponentFixture<RegistroTurista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTurista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTurista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
