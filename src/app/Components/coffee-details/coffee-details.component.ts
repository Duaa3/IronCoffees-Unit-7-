import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coffee } from 'src/app/Model/coffee';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  coffee: coffee | undefined;

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeServiceService
  ) {}

  ngOnInit(): void {
    this.loadCoffeeDetails();
  }

  private loadCoffeeDetails(): void {
    const coffeeId = this.route.snapshot.paramMap.get('id');

    if (coffeeId) {
      this.coffeeService.getCoffeeById(coffeeId).subscribe(
        (data) => {
          this.coffee = data;
        },
        (error) => {
          console.error('Error fetching coffee details:', error);
        }
      );
    }
  }
}