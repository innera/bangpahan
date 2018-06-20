import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhosappComponent } from './inhosapp.component';

describe('InhosappComponent', () => {
  let component: InhosappComponent;
  let fixture: ComponentFixture<InhosappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhosappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhosappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
