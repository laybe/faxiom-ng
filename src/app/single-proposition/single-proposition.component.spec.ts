import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePropositionComponent } from './single-proposition.component';

describe('SinglePropositionComponent', () => {
  let component: SinglePropositionComponent;
  let fixture: ComponentFixture<SinglePropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
