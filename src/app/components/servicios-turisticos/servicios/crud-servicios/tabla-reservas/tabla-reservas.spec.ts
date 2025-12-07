import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReservas } from './tabla-reservas';

describe('TablaReservas', () => {
  let component: TablaReservas;
  let fixture: ComponentFixture<TablaReservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaReservas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaReservas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
