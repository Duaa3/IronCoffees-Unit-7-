# Ironcoffees
This project is a simple Angular application that allows users to explore different types of coffees. It includes features like viewing all coffees, a random coffee generator, and creating new coffees.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.
# Endpoints

## API Endpoints 

| Method | Endpoint             | Response (200)                                      | Action                                                |
|--------|----------------------|------------------------------------------------------|-------------------------------------------------------|
| GET    | `/`                  | `[coffees]`                                          | Get all the coffees from the DB                        |
| GET    | `/:id`               | `{ coffee }`                                         | Get a single/specific coffee                           |
| GET    | `/random`            | `{ coffee }`                                         | Get a random coffee from the DB                         |
| POST   | `/new`               | `{ message: "New coffee successfully saved to database!" }` | Create a new coffee (fields specified in the instructions) |
| GET    | `/search?q={query}`  | `[coffees]`                                          | Get coffees from the DB whose name contains the search term. For example, `/search?q=lager` searches for all coffees with "lager" in the name. |
## Project Components and Contributors

| Component               | Description                                           | Student Contributor   |
|-------------------------|-------------------------------------------------------|-----------------------|
| Home                    | Home page with links to different pages               | Nouf              |
| AllCoffees              | View all coffees                                      | Ahmed           |
| NewCoffee               | Create a new coffee form                              | Duaa         |
| RandomCoffee            | View a randomly selected coffee                       | Ahmed           |
| CoffeeDetails           | View details of a specific coffee                     | Nouf     |
| NavBar                  | Navigation bar for easy navigation                    | Duaa           |
| CoffeeService           | Service handling data and API interactions            | All        |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
