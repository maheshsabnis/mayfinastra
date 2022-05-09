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
        - using *ngIf is recommended when the DOM add/remove is not costly (Toggeling for Custom Complex Component e.g. DataGrid, COmplex List with huge data)
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

- FullStack
  - JavaScript Front-End, API Middleware, Server-Side App and Database
    - Angular/React/Vue/Ember, REST API (JAVA Spring Boot), JAVA Server-Side App, Oracle, MS-SQL, MySQL, etc or NoSQL DB, (JAVA FullStack)
    -  Angular/React/Vue/Ember, REST API (Microsoft .NET Core), ASP.NET Core Server-Side App, Oracle, MS-SQL, MySQL, etc or NoSQL DB (Microsoft FullStack)
    -  Angular/React/Vue/Ember, REST API (Node+Express), Node+Express+Sequelize+Other Modules Server-Side App, Oracle, MS-SQL, MySQL, etc or NoSQL DB (Pure JavaScript FullStack with Isomorphic Apps)
    - Blazor, a .NET Runtime in Browser with C# Code, Pure Component Based using C#

- Practices to be followed while designing UI for Line-of-Business (LOB) Apps

  - Plan for Models e.g. Entity Classes, Logic Classes and Utility Classes for the Front-End
  - do not write logic into the component class
  - If the UI is Complex then use following strategies to manage the UI
    - Create a Re-Usable Component if same complex UI is repeated e.g. Tables, Lists, etc.
    - Avoid Hard-Coding for Data Properties when the UI (e.g. table) is generated dynamically
    - Decide wisely for Parent-Child Relationships across the Components
      - Understand 'COMPONENT-LIFECYCLE' properly
- Parent-Child Component Communication
  - Create a Re-Usable Component by following below rules
    - Make sure that the UI is consistent across all of its parents
    - The component MUST define @Input decorated public property for accepting data from the parent
    - If the Component wants to emit data to patent, then there must be an 'EventEmitter<T>' event declared and its MUST be decorated by @Output decorator to emit the data 
    - @Input applied on public property to accept data, from @angular/core 
      - The property decorated with @Input will be used for property binding 
    - EventEmitter<T>, class from  @angular/core , used to define an event for emitting data from parent-to-child
      - T is the type of data (string, number, etc.) to be emitted
      - The method 'emit()' will be used to emit data from child to parent
      - The EventEmitter decorated with @Output is used for 'event-binding' in parent component
        - The Parent Component MUST subscribe to it
    - @Output, decorator from  @angular/core, applied on EventEmitted event so that when an event is emitted from child, it will be bubbled-up to parent   
  - USing the @ViewChild or View Encapsulation  
    - Using @ViewChild, means that the Parent Holds  reference of child Component and it update the child component explicitly
- Publish-Subscribe Component Communication Patterns      
 