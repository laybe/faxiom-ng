import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionWithArgumentsComponent } from './proposition-with-arguments.component';

describe('PropositionWithArgumentsComponent', () => {
  let component: PropositionWithArgumentsComponent;
  let fixture: ComponentFixture<PropositionWithArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionWithArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionWithArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
