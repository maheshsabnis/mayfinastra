import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './app.message.component';
import { EmployeeComponent } from './components/employeetempltecomponent/app.employee.component';
import { SelectComponent } from './components/reusablecomponents/app.select.component';
import { ParentComponent } from './components/parentchiletest/app.pernent.component';
import { ChildComponent } from './components/parentchiletest/app.child.component';
import { OtheChildComponent } from './components/parentchiletest/app.otherchild.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, EmployeeComponent,
    SelectComponent, ParentComponent, ChildComponent,
    OtheChildComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
