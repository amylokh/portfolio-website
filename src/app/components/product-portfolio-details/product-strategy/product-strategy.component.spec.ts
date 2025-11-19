import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStrategyComponent } from './product-strategy.component';

describe('ProductStrategyComponent', () => {
  let component: ProductStrategyComponent;
  let fixture: ComponentFixture<ProductStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStrategyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
