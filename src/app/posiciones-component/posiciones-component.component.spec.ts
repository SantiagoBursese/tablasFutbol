import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionesComponentComponent } from './posiciones-component.component';

describe('PosicionesComponentComponent', () => {
  let component: PosicionesComponentComponent;
  let fixture: ComponentFixture<PosicionesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
