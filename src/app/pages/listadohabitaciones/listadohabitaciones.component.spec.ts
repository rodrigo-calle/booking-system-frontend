import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadohabitacionesComponent } from './listadohabitaciones.component';

describe('ListadohabitacionesComponent', () => {
  let component: ListadohabitacionesComponent;
  let fixture: ComponentFixture<ListadohabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadohabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadohabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
