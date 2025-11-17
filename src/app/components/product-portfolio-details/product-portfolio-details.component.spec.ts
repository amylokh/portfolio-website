import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPortfolioDetailsComponent } from './product-portfolio-details.component';

describe('ProductPortfolioDetailsComponent', () => {
  let component: ProductPortfolioDetailsComponent;
  let fixture: ComponentFixture<ProductPortfolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPortfolioDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
