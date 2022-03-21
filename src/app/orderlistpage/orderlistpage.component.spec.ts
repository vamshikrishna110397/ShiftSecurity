import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistpageComponent } from './orderlistpage.component';

describe('OrderlistpageComponent', () => {
  let component: OrderlistpageComponent;
  let fixture: ComponentFixture<OrderlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
