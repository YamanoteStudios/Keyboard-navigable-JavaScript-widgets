import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsForWidgetComponent } from './tabs-for-widget.component';

describe('TabsForWidgetComponent', () => {
  let component: TabsForWidgetComponent;
  let fixture: ComponentFixture<TabsForWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsForWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsForWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
