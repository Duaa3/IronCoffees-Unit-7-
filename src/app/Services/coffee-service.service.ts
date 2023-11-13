import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coffee } from '../Model/coffee';



@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {
  private apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) {}

  getAllCoffees(): Observable<coffee[]> {
    return this.http.get<coffee[]>(this.apiUrl);
  }
  getRandomCoffee(): Observable<coffee> {
    const randomUrl = `${this.apiUrl}/random`;
    return this.http.get<coffee>(randomUrl);
  }
  getCoffeeById(coffeeId: string): Observable<coffee> {
    const coffeeUrl = `${this.apiUrl}/${coffeeId}`;
    return this.http.get<coffee>(coffeeUrl);
  }
 
  createCoffee(newCoffee: Partial<coffee>): Observable<coffee> {
    return this.http.post<coffee>(this.apiUrl + '/new', newCoffee);
  }
}
