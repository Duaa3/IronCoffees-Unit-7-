import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AllCoffeesComponent } from './Components/all-coffees/all-coffees.component';
import { NewCoffeeComponent } from './Components/new-coffee/new-coffee.component';
import { RandomCoffeeComponent } from './Components/random-coffee/random-coffee.component';
import { CoffeeDetailsComponent } from './Components/coffee-details/coffee-details.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent,
  },
  {
    path: "All-Coffees",
    component: AllCoffeesComponent,
  },
  {
    path: "New-Coffee",
    component: NewCoffeeComponent,
  },
  {
    path: "Random-Coffee", 
    component: RandomCoffeeComponent,
  },
  {
    path: 'coffees/:id',
    component: CoffeeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
