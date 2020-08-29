import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentsListComponent } from './arguments-list.component';

describe('ArgumentsListComponent', () => {
  let component: ArgumentsListComponent;
  let fixture: ComponentFixture<ArgumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
