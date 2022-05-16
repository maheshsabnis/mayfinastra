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
import { CreateDeptComponent } from './components/routingapp/app.createdept.component';
import { EditDeptComponent } from './components/routingapp/app.editdept.component';
import { ListDeptComponent } from './components/routingapp/app.listdept.component';
import { MainRouteComponent } from './components/routingapp/app.mainroute.component';
import { HighlightDirective } from './directives/app.highlight.directive';
import { HighLightComponent } from './components/directiveusecomponent/app.about.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, EmployeeComponent,
    SelectComponent, ParentComponent, ChildComponent,
    OtheChildComponent, DepartmentSenderComponent,EmployeeReceiverComponent,
    EmployeeReactiveFormComponent, HttpCallComponent,
    HttpSecureCallComponent, ColorDirective, ListElementUserComponent,
    CreateDeptComponent,EditDeptComponent,ListDeptComponent,
    MainRouteComponent, HighlightDirective, HighLightComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    // Importing and loading AppRoutingModule and hence
    // the RouterModule in it and hence RouteTable
    // This means the RouteTable is loaded at root of the Current Application
    AppRoutingModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:SecurityTokenInterceptorService, multi:true
  }],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [HighLightComponent]
})
export class AppModule { }
