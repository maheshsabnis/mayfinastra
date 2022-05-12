import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
import { HttpCallComponent } from './components/httpcallcomponent/app.httpcall.component';
import {SecurityTokenInterceptorService} from './services/app.securityinterceptor.service';
import { HttpSecureCallComponent } from './components/httpsecurecallcomponent/app.httpsecurecall.component';
import { ColorDirective } from './directives/app.color.directive';
import { ListElementUserComponent } from './components/liteleemntuser/app.listeleemntuser.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, EmployeeComponent,
    SelectComponent, ParentComponent, ChildComponent,
    OtheChildComponent, DepartmentSenderComponent,EmployeeReceiverComponent,
    EmployeeReactiveFormComponent, HttpCallComponent,
    HttpSecureCallComponent, ColorDirective, ListElementUserComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:SecurityTokenInterceptorService, multi:true
  }],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ListElementUserComponent]
})
export class AppModule { }
