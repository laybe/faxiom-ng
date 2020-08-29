import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentArrowComponent } from './argument-arrow.component';

describe('ArrowComponent', () => {
  let component: ArgumentArrowComponent;
  let fixture: ComponentFixture<ArgumentArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgumentArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgumentArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
