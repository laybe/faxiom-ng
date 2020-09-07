import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleChoiceComponent } from './example-choice.component';

describe('ExampleChoiceComponent', () => {
  let component: ExampleChoiceComponent;
  let fixture: ComponentFixture<ExampleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
