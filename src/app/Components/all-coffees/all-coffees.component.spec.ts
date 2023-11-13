import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoffeesComponent } from './all-coffees.component';

describe('AllCoffeesComponent', () => {
  let component: AllCoffeesComponent;
  let fixture: ComponentFixture<AllCoffeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCoffeesComponent]
    });
    fixture = TestBed.createComponent(AllCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
