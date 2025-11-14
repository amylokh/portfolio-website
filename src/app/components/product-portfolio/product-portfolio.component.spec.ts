import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPortfolioComponent } from './product-portfolio.component';

describe('ProductPortfolioComponent', () => {
  let component: ProductPortfolioComponent;
  let fixture: ComponentFixture<ProductPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
