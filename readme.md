# University management system

### Proposal

1.  3 types of user roles (Administrator, teacher, student)
2.  The administrator will create courses (code, name, description)
3. The administrator will create teacher (name, email) and student (name, email), etc.
4. A notification mail should be sent to the given email address with system access credentials.
5. Teachers will select courses that they will be teaching and the administrator will approve (If rejected the selection   from admin then the student should be notified)
6.  Students will select their preferred course to take which will be shown along with the teacher who will take that class(there should be a credit limit. Students should not be able to select courses more than the limit. if rejected the selection from admin then the student should be notified)

![plot](./temp/planning.png)

## Backend 

#### Asp.net core version 6 (webapi, entity frameworkcore 6.0.5, sqlserver version 6.0.5)
 
 1. First open visual studio(2022) then open the sln file.
 2. Then from nuget package manage solution install entityframeworkcore and sqlite
 3. open PMC run ``` add-migration createdb```
 4. then run ``` update-database```
 5. then ready to go just run the project

 ## Frontend


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server
please install the angular module by `npm install` either it won't run.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
