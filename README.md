# AngularDay3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Forms
- template driven forms
- reactive forms

Angular js had only 2 way data binding
Angular provided option 

@NgModule
- include all libraries required by app 
- bootstrap- defines the component that should be bootstrapped

BrowserModule
- compatibility with browser, mobile, laptop etc.
- change browserDynamic.bootstrapmodule for particular browser

Component
- <template>
- class{}
- @metadata()
- properties and methods of the component class are available to the template
- metadata allows Angular to process a class

shadow DOM for different stylings

use angular with firebase

2 way data binding- first event is binded then property

Class Import Decorate Enhance Repeat

to make a component -
ng g c <component-name>

@Input-
1. declare and assign an array inside the parent component
2. call the child component from the parent component
3. property bind by using [] the child component with the property of parent
4. Access the property inside child using @Input Decorator
5. Bind that array with *ngFor inside the child component