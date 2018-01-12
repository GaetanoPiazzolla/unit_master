import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitdetailComponent } from './unitdetail.component';

describe('UnitdetailComponent', () => {
  let component: UnitdetailComponent;
  let fixture: ComponentFixture<UnitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
