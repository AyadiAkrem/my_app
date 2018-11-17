# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular Notes

## Basics 

1. Selectors 
There are 3 kind of selectors : 
- By Element :  it must be declared as `selector: 'app-root'` in TS file and use `<app-root></app-root>` in the HTML   => see the app component 
- By attribute : it must declared as `selector: '[app-root]'` in TS file and use `<div app-root></div>` in the HTML    => see the servers compoenent
- By class : it must declared as `selector: '.app-root'` in TS file and use `<div class="app-root"></div>` in the HTML => see the server component

2. Data Binding 

- Example of String interpolation: `<p> The Server with ID  {{ serverId }} is {{ getServerStatus() }} </p>`
- Example of Property Binding : `<button class="btn btn-primary" [disabled]="allowNewServer" > Add new Server </button>`

3. Event Binding 

- Example of event Binding : `<input  type="text"  class="form-control"  (input)="onUpdateServerName($event)">`
