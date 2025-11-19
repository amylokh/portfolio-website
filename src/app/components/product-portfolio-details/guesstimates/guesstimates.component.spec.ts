import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesstimatesComponent } from './guesstimates.component';

describe('GuesstimatesComponent', () => {
  let component: GuesstimatesComponent;
  let fixture: ComponentFixture<GuesstimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuesstimatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuesstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
