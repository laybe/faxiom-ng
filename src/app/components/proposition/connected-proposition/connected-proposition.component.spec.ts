import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedPropositionComponent } from './connected-proposition.component';

describe('ConnectedPropositionComponent', () => {
  let component: ConnectedPropositionComponent;
  let fixture: ComponentFixture<ConnectedPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
