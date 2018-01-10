import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndepComponent } from './indep.component';

describe('IndepComponent', () => {
  let component: IndepComponent;
  let fixture: ComponentFixture<IndepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
