import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingControlsComponent } from './grouping-controls.component';

describe('GroupingControlsComponent', () => {
  let component: GroupingControlsComponent;
  let fixture: ComponentFixture<GroupingControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
