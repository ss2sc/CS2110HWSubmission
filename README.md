# CS2110 HW Submission
CS2110 Assignment Submission Redesign

## Onboarding the app
Make sure you have node.js to be able to run npm commands: https://nodejs.org/en/  
Make sure you have the Angular CLI: `npm install -g @angular/cli` (the -g tag is global and optional as long as you're in the directory of the repo)

Clone the repo onto your local with `git clone https://github.com/ss2sc/CS2110HWSubmission`, this will create a folder of the repo within your current directory.  
Afterwards, run `npm install` to install the necessary dependencies.  
Finally, test run the server with `ng serve` and go to `http://localhost:4200/` (Port is 4200 by default, if you changed it please go to the one you changed it to)  
If a dependency failed, please install packages manually.

### Dependencies
Bootstrap: `npm install bootstrap`  
Angular Materials: `ng add @angular/material` (https://material.angular.io/guide/getting-started)  
Reading zip files: `npm install jszip`  
Built in code editor: `npm install ng2-ace-editor`  
Ace dependencies: `npm install brace`  

## Integrating Backend and Writing Code
The frontend is written with a dummy backend, using .json files. We tried our best to modularize it so that objects just need to be reassigned
to objects obtained from the backend, and the frontend would still work (but we couldn't test this). Some examples of this are tagged with a 
"TODO:", so you could search it with your IDE (not all of them may be tagged). Otherwise, look for .json imports and replace the dummy data we 
used. Additionally, in place of cookies or sessions for users, we used a global service to keep track. This is found in `src\app\common\services\globals.service.ts`
If you need help writing up additional components or modifying code aside from replacing data, refer to the Angular documentation or the specific library
to get help.

# Angular Documentation
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
