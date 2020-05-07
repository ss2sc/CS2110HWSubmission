# CS2110 HW Submission
CS2110 Assignment Submission Redesign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

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

## Writing Angular
# Dependencies that need to be installed
Bootstrap: `npm install bootstrap`
Angular Materials: `ng add @angular/material` (https://material.angular.io/guide/getting-started) 
Reading zip files: `npm install jszip`
Built in code editor: `npm install ng2-ace-editor`
Ace dependencies: `npm install brace`

## Future Work
Due to the transition to online classes, an actual web server was not able to be obtained with cshelpdesk being busy. Thus, we were not able to use cookies or integrate netbadge login - currently the "user" is implemented with a global variable (will want to change this on backend implementation)

## Integrating JSON
Currently, every page must import the JSON file using `import DummyData from '../assets/dummydata.json` (may need to add more '../' based on where you are since it's a relative link)

Then, I'm not familiar with how most apps do user persistance so I have a global variable, referred to by this.globals.user by other components, running through so we'll use that to mimic the web database. 

Modify this dummydata.json file as needed.

## TODO
Routing: Temp routing for now while we just make the pages

ModifyAssignment: Reroute it when buttons are added so we know which assignment to load, instead of currently hardcoded assignment

Mock Backend: Found out how to set up one closer to a database service, could help with backend integration. Do this after front-end is basically done. Information can be found here (along with other routing things): https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/