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
            - ng update
              - v1 to v3 is possible by v4 is not
              - First Migrate from v1 to v2 or v3 and then migrate to v4
  - Features of Angular Those Affect the UI (Directly and In-Directly) 
    - REST API Calls  
      - Indirect
        - RxJs and its 'Observable' Object
      - Use HttpClientModule from @angular/common/http
        - Platform for Http Outgoing and Incoming calls
        - Resolve the 'HttpClient' class
          - HttpClient MUST be injected in the service class
          - Methods
            - get()/post()/put()/delete()
              - All returns Observable<T>
                - T, can be primitive type or Binary Responses 
                  - ArrayBuffer, BLOB, introduced in Http2 protocol standard    
            - Observable.subscription(next=>{}, error=>{}); 
              - Client/ Caller subscribes to Observable
                - next, successful execution and get data record by record
                - error, the error response        
      - Arrange for HttpInteceptors
        - They will manage each outgoing and incoming calls by intercepting the HTTP Message by adding header information in it           
          - HttpInterceptor INterface
            - intercept(HttpRequest, HttpHandler): Observable<HttpEvent>
              - HttpRequest: represents the current Http request initiated 
                  - This request object can be modified by the application as per thr need e.g.
                     - Add AUTHORIZATION Header in each outgoing request
                     - Add Custom Header information e.g. Version 
              - HttpHandler: handle the request to forward it to next Interceptor (if any) or forwarding the call to REST API
              - HttpEvent: Manage the State of execution of HttpRequest (Success, fail, etc.)
            - register this object as a singleton object into the Dependency Injection Container of @NgModule i.e. 'providers:[]' of NgModule
              - providers:[{provide:HTTP_INTERCEPTORS, useClass:INTERCEPTOR_CLASS, multi:true }]
                -  HTTP_INTERCEPTORS: Load Interceptor for Http Calls
                - useClass: Register the class as Singleton as interceptor provided it implements HttpInterceptor interface
                - multi: Monitor and intercept each HTTP Outgoing call   
        - If data is more, then use Server-Side Pagination for data fetch
          - Note: This will increase number of hits to server and hence to DB, this will a either a cost (for Paid host e.g. Cloud) or Concurrency Issue for data access
          - Use caching on server for read-only data display (e.g. reports)
          - Use Angular Application State Management aka NGRX
            - Complex Architecture for JS Apps           
            - https://github.com/maheshsabnis/newngrx.git
    - Directives
      - Direct
      - Objects those are responsible for following
        - Defining common Behavior on HTML Template of the component, aka Attribute Directives
          - e.g. [(ngModel)], [formGroup], formControlName, etc.
        - Reusable UI with Autonomous functionalities (Component  Directive) 
        - Planning for Creating Custom Attribute Directive
          - Create a Class decorated with @Directive from @angular/core
            - The '@Directive' provides 'selector' property, which we have set for creating Custom HTML Attribute that will be applied on HTML Element
              - Very IMP: 
                - if this attribute is updated using Property binding then selector will be as follows
                  - selector: '[NAME-OF-CUSTOM-ATTRIBUTE]' e.g. selector: '[setColor]'
                - if not using property binding then just create a attribute as follows
                  - selector: 'CUSTOM-ATTRIBUTE-NAME' e.g. selector:'mydata'
          - Define public properties decorated with @Input decorator for accepting data to set the behavior of the attribute
          - Create a Function that contains logic for the Directive
          - Target the HTML element where the Directive is applied
            - Using the 'ElementRef' class from the @angular/core
          - Plan for Rendering of HTML element on which the directive is applied and is executed
            - After execution of Directive the new rendering will be defined by the 'Renderer2' from @angular/core    
          - Define public method(s) to activate and execute the directive based on event. This event will be define by applying '@HostLisner('EVENT-NAME')' decorator on the method(s)   
            - When this event is raised on HTMl element, the directive will be activated and executed and then the new rendering will be generated on DOM
      - Practices for creating Custom Attribute Directive 
        - Do not write complex logic for execution
        - Make sure that the DOM rendering is handled using standard CSS or HTML Tags
        - Events those cause the directive to activate and execute MUST be standard JS Events
        - If not above 3 points the better create Custom reusable Component Directive        
    - LitElements
      - Directly  impact the UI
      - npm install --save lit lit-element lit-html
        - lit
          - The base library for WebComponents for LitElements
        - lit-element
          - The library for the Implementation that contains
            - html template
              - rendering
            - properties
              - Data
            - css
              - Styles
        - lit-html
          - HTML template Parser and execution in teh Shadowdom       
      - npm install --save @webcomponents/custom-elements @webcomponents/webcomponentsjs
        - @webcomponents/custom-elements
            - the Custom Element Registry
         @webcomponents/webcomponentsjs
            - The Execution of the Element in DOM under the Shadow DOM 
      - LitElements in Angular
        - use 'lie/decorators.js'
          - a Custom Decorator Concept of ES 6 implemented only for Angular   
          - provide the '@customElement('NAME-OF-ELEMENT-THAT-WILL-BE-A-TAG-USED-AS-HTML-TAG')' decorator   
            - using @customElement() the Angular EcoSystem will understand the LitElement as custom webComponent for Angular Application
        - Configure the @NgModule to Understand and use the Custom Elements in its EcoSystem
          - Import 'CUSTOM_ELEMENT_SCHEMA' from @angular/core and pass it to the 'schemas:[]' array of the @NgModule   
          - CUSTOM_ELEMENT_SCHEMA, will inform Angular that there are custom webcomponents used in the application
        - to generate the HTML dynamically based on properties using the JS style coding in HTML under the '${}'  
        - bind the method of LitElement class with HTML element using following
          - @change=${this.selectData}
          - @EVENT=${METHOD} 
        - Use Cases
          - Emit / Bubble Up data from LieElement to Angular
            - Use the 'dispatchEvent()' method of the JavaScript use by LitElement class to bubble-up CustomEvent to Angular Component
```` javascript
 this.dispatchEvent(new CustomEvent<any>('change',{
       detail:data
     }))

````
           -  CustomEvent<T>, a class used to define custom eventing in JavaScript Apps those are using WebComponents. The constructor accepts 2 parameters
            - Parameter 1: The Custom Event name, this MUST be subscribed by the parent of the WebComponent
            - Parameter 2: The 'detail', the Event Payload or EventArguments emitted by the WebComponent 

          - Pass data from Angular to LitElement 
            - Declare @property in LitElement and use them for property binding in Angular component
            - Using ngModel when the Angular Component is changed, the updated property value from Component will be passed to LitElement
            - To pass the data from Complex Array, make sure that the LitElement MUT define a @property of the type the Custom Class for which the Array is declared, the only the Array in LitElement will be Mutated   
    - Pipes    
      - Direct    
      - SImple Transformation of Data into the String
        - json, date, currency, etc.
- Routing
  - RouterModule from @angular/router
  - Platform for Route BAsed Apps
  - Method of RouterModule
    - forRoot(ROUTE-TABLE)
      - Load the Route Table at the Current Application's root level
    - forChild(ROUTE-TABLE) 
      - Load the Route Table on demand for lazy loading  
  - Classes
    - Routes
      - A Route table that contains collection of 'Route'
    - Route
      - A Class that defines route entry in Route Table
      - Properties
          - path: URL
          - component: Name of the component
          - redirectTo: Explicit redirect to specific Component
          - children: A child Route Table
          - loadChildren: Lazy Loading
            - Perform Async IO Search of dependencies and load the module, this will be cached in the browser 
          - canActivate: Used for Role Based Routing aka Guarded Routes
    - Router
      - Used for Event based explicit routing      
      - Method
        - navigate([ROUTE-EXPRESSION])
    - ActivatedRoute
      - represents the current active route navigation
      - Used to subscribe to the route expression and read route parameters (if any) 
    - CanActivate
      - Interface provided for Guarded Routing
    - RouteSnapshot 
      - Maintain the state of Guarded Routing          
  - Directives
    - [routerLink]
      - Applied on anchor tag to query to route table
```` html
  <a [routerLink]="[PATH]">
````
    - The Platform in which routed component will be loaded and rendered 
```` html
    <router-outlet></router-outlet>
````

- Quality Assurance for Angular Apps  
  - Planning For Testing
    - Choose Right Framework
    - Understand the Angular Object Model for Tests
  - Testing Configuration
    - Test Prerequisites
      - Arrangement of required objects for Testing
    - Test Dependencies
      - Set of dependencies used while test
        - e.g. If Component is to be tested, then make sure that all objects used by component must be arranged in test
          - Focus on 'UNIT TEST'
    - Test AddIns  
      - Coverage of Code
      - JEST
  - What MUST be Tested?
    - All Components
    - Write at lease One Test for Each Service
    - Test Directive
