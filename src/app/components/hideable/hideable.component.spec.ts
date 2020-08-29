import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideableComponent } from './hideable.component';

describe('HideableComponent', () => {
  let component: HideableComponent;
  let fixture: ComponentFixture<HideableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
