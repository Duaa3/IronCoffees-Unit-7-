import { Component, OnInit } from '@angular/core';
import { coffee } from 'src/app/Model/coffee';
import { CoffeeServiceService } from 'src/app/Services/coffee-service.service';

@Component({
  selector: 'app-all-coffees',
  templateUrl: './all-coffees.component.html',
  styleUrls: ['./all-coffees.component.css']
})
export class AllCoffeesComponent implements OnInit {
  coffees: coffee[] = [];

  constructor(private coffeeService: CoffeeServiceService) {}

  ngOnInit(): void {
    this.loadCoffees();
  }

  private loadCoffees(): void {
    this.coffeeService.getAllCoffees().subscribe(
      (data) => {
        this.coffees = data;
      },
      (error) => {
        console.error('Error fetching coffees:', error);
      }
    );
  }
}