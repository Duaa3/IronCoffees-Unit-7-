import { Component, OnInit } from '@angular/core';
import { coffee } from 'src/app/Model/coffee';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit {
  randomCoffee: coffee | undefined;

  constructor(private coffeeService: CoffeeServiceService) {}

  ngOnInit(): void {
    this.loadRandomCoffee();
  }

  private loadRandomCoffee(): void {
    this.coffeeService.getRandomCoffee().subscribe(
      (data) => {
        this.randomCoffee = data;
      },
      (error) => {
        console.error('Error fetching random coffee:', error);
      }
    );
  }
}
