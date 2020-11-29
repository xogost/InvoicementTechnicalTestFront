import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicementComponent } from './invoicement.component';

describe('InvoicementComponent', () => {
  let component: InvoicementComponent;
  let fixture: ComponentFixture<InvoicementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
