import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AllCoffeesComponent } from './Components/all-coffees/all-coffees.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NewCoffeeComponent } from './Components/new-coffee/new-coffee.component';
import { RandomCoffeeComponent } from './Components/random-coffee/random-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeDetailsComponent } from './Components/coffee-details/coffee-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCoffeesComponent,
    RandomCoffeeComponent,
    NewCoffeeComponent,
    NavBarComponent,
    CoffeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
