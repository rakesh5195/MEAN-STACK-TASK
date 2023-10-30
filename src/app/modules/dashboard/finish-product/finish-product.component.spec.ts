import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishProductComponent } from './finish-product.component';

describe('FinishProductComponent', () => {
  let component: FinishProductComponent;
  let fixture: ComponentFixture<FinishProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
