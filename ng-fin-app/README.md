ng build --watch --configuration development (Angulart 13.x)
Initial Chunk Files | Names         |  Raw Size
vendor.js           | vendor        |   1.81 MB | --> Standard Angular Package Transpilation
polyfills.js        | polyfills     | 122.97 kB | --> The Browser Compatibility/Stack Tract JS
main.js             | main          |  50.10 kB | --> The Transapilation of dev. code
runtime.js          | runtime       |   6.35 kB | --> WebPack DevKit Configuration file 
styles.css          | styles        | 736 bytes | --> CSS Merging and build of all CSS

                    | Initial Total |   1.98 MB


Production build
 ng serve --configuration production

Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
main.js               | main          | 310.14 kB |                81.15 kB
polyfills.js          | polyfills     | 151.07 kB |                39.09 kB
styles.css, styles.js | styles        | 117.10 kB |                28.47 kB
runtime.js            | runtime       |   1.25 kB |               677 bytes

                      | Initial Total | 579.57 kB |               149.37 kB

# Angular Object Model
- Module
  - @angular/core
  - @NgModule 
    - Object that contains Component, Directives, services, pipes, etc.
    - imports:[]
    - exports:[]
    - declarations:[]
    - bootstrap:[]
    - providers:[]
- Component
  - Autonomous Object that contains the following
    - UI, using HTML template
      - External html file (Recommended)
      - Inline HTML
      - This UI is loaded in browser using the 'selector' property, this will provide 'CUSTOM HTML TAG'     
    - Data Members
      - USed for Data binding
    - Methods
      - Used for Event Binding    
- Directive
  - Custom reusable HTML UI
  - Custom reusable UI Behavior based on Events
  - Directives are used in HTML Template of the Component
  - The 'Component' is also a Directive, we can used it as reusable UI
  - Directive Types
    - Component
    - Structural Directives
      - *ngFor, execute a for..of loop on collection to generate HTML Elements Dynamically
      - *ngIf, the If Condition for Toggeling
      - *ngSwicth..ngSwitchCase, switch case
    - Attribute Directives
      - Used for applying behavior on HTML Elements
      - Angular have a Parser to extend standard HTML Properties to be used as Angular Attribute directives
        - [value], [href], [disabled], [checked], [hidden], etc.
        - Most of the Attribute directives are used for DataBinding
        - Angular Specific Directives
          - [formGroup], [(ngModel)], etc.    
- Pipe
  - String Transformation for showing Static UI on HTML Page
- Service
  - Injectable objects used at application Level
  - e.g. An object that is used to make HTTP Calls to REST APIs
