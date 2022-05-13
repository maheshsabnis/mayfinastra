import { NgModule, } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MessageComponent } from './components/app.message.component';
// lets define a route Table
const routes:Routes = [
  {path:'', component:MessageComponent}
];

@NgModule({
  // Register the RouterModule as Child
  imports: [RouterModule.forChild(routes),CommonModule],
  declarations: [MessageComponent],
})
export class LazyModule { }
