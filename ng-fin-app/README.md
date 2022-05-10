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
  - Use Case: 
    - Show List of Departments and Employees in Separate Tables
    - When a DeptName is selected from Department List, the Employee List MUST show only Empployees from selected DeptName
      - This can be implemented using the 'Angular Service' 
  - Angular Service
    - An Object that has a lifecycle global to entire application By Default
    - This is pattern that we used for following
      - Maintaining the 'STATE' of the data to be shared across Components, Mediator
      - Used for Async Communication Pattern to external Services
          - REST APIs
          - Sockets
            - SignalR or Socket.io
          - gRPC   
      - When used for Sharing STATE, the Service MUST be registered as a Global Singleton object at Application Level
        - The 'root'
      - The Service Object MUST be decorated as '@Injectable', class from '@angular/core'       
- Concept of Form-Post in Angular
  - It is a MVC Framework for Building Front-End Apps
    - Model-View-Controller
      - Model, Front-End Logic
      - View, Component
      - Controller, Logical block that is used for controlling the behavior of View
        - Form Technology
          - @angular/forms Package
            - Template Form
              - The mechanism of binding Component properties to UI using [(ngModel)], requires 'FormsModule'
                - ngModel executes Update Code for Two-Way binding for only those properties which are used under the Component with ngChanges
                  - Observations: 
                    - If the same property is changed again-and-again, ngModelChanged will be invoked again-and-again and hence this may delay performance   
                    - For Complex Object Property Update the instance of the class MUST be passed to ngModel
                      - For each ngModelChange the instance is invoked     
            - Reactive Forms
              - A PURE MVC that is proven by implementation that Angular is MVC
              - ReactiveFormsModule in @angular/forms
                - AbstractControl
                  - The abstract base class for all classes used for Forms
                    - e.g. FormGroup, FormControl, etc.
                - FormGroup
                  - Represents a Currently Loaded Form on DOM
                  - Map each editable element under the Form with Model object (Model-View Binding)
                    - The Model instance is already loaded and cached
                  - Methods and Properties
                    - SetValues(), a method to assign data to FormGroup and Hence to Model class  
                    - value, a property, to read data from FormGroup
                - FormBuilder
                  - Build the Form with all FormGroup and its Editable elements and it internally evaluates the Model Binding 
                - ngForm Directive
                  -  Internally mapped with the HTML Form tag &lt;form&gt;
                - FormControl
                  - Represents a Mapping between The public property of Model class and the editable element under 
                  the form
                    - A Collection of Editable elements under the FormGroup 
                  - Methods and Properties
                    - SetValues(), a method to assign data to FormControl and Hence to Model class property  
                    - value, a property, to read data from FormControl
                - Validatior          
                  - A Class that contains static methods for applying validation rules on the public properties of the Model class
                    - required(AbstractControl), requiredTrue(AbstractControl)
                    - min(), max()
                    - minLength(), maxLength()
                    - pattern(RegEx | string)
                    - null(AbstractControl)
                    - compose([Array of Validators]), composeAsync([Array of Validators])
                    - All method those are accepting 'AbstarctControl' as input parameter, need not to pass any parameter explicitly, instead the UI element with which the Model property is bound using formControlName, its reference will be passed as AbstractControl 
                - [formGroup] an attribute directive with property-binding, applied on form tag to map the HTML Form with the FornGrouos instance which contains Model properties with FormControl Mapping  
                - formControlName, an attribute directive used by the editable element to bind pubic properties of Model class with editable elements for Read/Write/Validation operations
                  - formControlName is an instance property of the FormControl class

        - Applying validators
          - Check if the value is changed
            - formGroup.controls['FormControlNamePropertyName'].dirty
          - Check if the value is invalid
            - formGroup.controls['FormControlNamePropertyName'].invalid OR !formGroup.controls['FormControlNamePropertyName'].valid
          - Check the Error Conditions
            - formGroup.controls['FormControlNamePropertyName'].error['ERROR-RULE']             
    - Angular 10+
      - strictNullChecks
            - When a Model is bound to UI element, the AOT and Ivy will compile the Model and if any of the proeprty is possibly contains NULL, the the UI element MUST be configured for Nullbale type or inform the AOT and hence Ivy that on HTML do not use strictNullChecks 

                         
 