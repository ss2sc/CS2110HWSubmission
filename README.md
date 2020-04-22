# CS2110 HW Submission
CS2110 Assignment Submission Redesign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Dependencies that need to be installed
Bootstrap: `npm install bootstrap`

## Integrating JSON
Currently, every page must import the JSON file using `import DummyData from '../assets/dummydata.json` (may need to add more '../' based on where you are since it's a relative link)

Then, I'm not familiar with how most apps do user persistance so I have a global variable, referred to by this.globals.user by other components, running through so we'll use that to mimic the web database. 

Modify this dummydata.json file as needed.

## TODO
Routing: Temp routing for now while we just make the pages