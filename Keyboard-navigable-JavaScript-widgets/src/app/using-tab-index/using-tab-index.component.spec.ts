import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTabIndexComponent } from './using-tab-index.component';

describe('UsingTabIndexComponent', () => {
  let component: UsingTabIndexComponent;
  let fixture: ComponentFixture<UsingTabIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingTabIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingTabIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
