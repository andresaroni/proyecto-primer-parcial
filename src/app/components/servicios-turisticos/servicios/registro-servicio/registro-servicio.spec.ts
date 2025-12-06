import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroServicio } from './registro-servicio';

describe('RegistroServicio', () => {
  let component: RegistroServicio;
  let fixture: ComponentFixture<RegistroServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
