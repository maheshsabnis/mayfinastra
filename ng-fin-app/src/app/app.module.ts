import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './app.message.component';
import { EmployeeComponent } from './components/employeetempltecomponent/app.employee.component';
import { SelectComponent } from './components/reusablecomponents/app.select.component';
import { ParentComponent } from './components/parentchiletest/app.pernent.component';
import { ChildComponent } from './components/parentchiletest/app.child.component';
import { OtheChildComponent } from './components/parentchiletest/app.otherchild.component';
import { DepartmentSenderComponent } from './components/communications/app.departmentsender.component';
import { EmployeeReceiverComponent } from './components/communications/app.employeereceiver.component';
import { EmployeeReactiveFormComponent } from './components/employeereactivecomponent/app.employeereactiveform.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, EmployeeComponent,
    SelectComponent, ParentComponent, ChildComponent,
    OtheChildComponent, DepartmentSenderComponent,EmployeeReceiverComponent,
    EmployeeReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeReactiveFormComponent]
})
export class AppModule { }
