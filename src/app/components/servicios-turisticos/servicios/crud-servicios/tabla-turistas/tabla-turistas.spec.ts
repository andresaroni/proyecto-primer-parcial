import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTuristas } from './tabla-turistas';

describe('TablaTuristas', () => {
  let component: TablaTuristas;
  let fixture: ComponentFixture<TablaTuristas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTuristas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTuristas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
