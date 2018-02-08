import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIndexComponent } from './bill-index.component';

describe('BillIndexComponent', () => {
  let component: BillIndexComponent;
  let fixture: ComponentFixture<BillIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
