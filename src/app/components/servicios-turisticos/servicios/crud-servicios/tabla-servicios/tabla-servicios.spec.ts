import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaServicios } from './tabla-servicios';

describe('TablaServicios', () => {
  let component: TablaServicios;
  let fixture: ComponentFixture<TablaServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaServicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
