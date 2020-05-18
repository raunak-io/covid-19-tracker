import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianStatesComponent } from './indian-states.component';

describe('IndianStatesComponent', () => {
  let component: IndianStatesComponent;
  let fixture: ComponentFixture<IndianStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
