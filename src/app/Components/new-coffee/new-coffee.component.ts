import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coffee } from 'src/app/Model/coffee';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css'],
})
export class NewCoffeeComponent {
  newCoffeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private coffeeService: CoffeeServiceService) {
 
    const emptyCoffee: Partial<coffee> = {};

    this.newCoffeeForm = this.formBuilder.group({
      name: [emptyCoffee.name, Validators.required],
      tagline: [emptyCoffee.tagline, Validators.required],
      description: [emptyCoffee.description, Validators.required],
      first_roasted: [emptyCoffee.first_roasted, Validators.required],
      roaster_tips: [emptyCoffee.roaster_tips, Validators.required],
      strength_level: [emptyCoffee.strength_level, [Validators.required, Validators.min(0)]],
      contributed_by: [emptyCoffee.contributed_by, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.newCoffeeForm.valid) {
      const newCoffeeData = this.newCoffeeForm.value;
      this.coffeeService.createCoffee(newCoffeeData).subscribe(
        (createdCoffee) => {
          console.log('New coffee created:', createdCoffee);
         
        },
        (error) => {
          console.error('Error creating new coffee:', error);
        }
      );
    }
  }
}
