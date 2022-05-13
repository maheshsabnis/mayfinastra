import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employeetempltecomponent/app.employee.component';
import { CreateDeptComponent } from './components/routingapp/app.createdept.component';
import { EditDeptComponent } from './components/routingapp/app.editdept.component';
import { ListDeptComponent } from './components/routingapp/app.listdept.component';

// Route Table
const routes: Routes = [
  {path:'',component:ListDeptComponent,
     children:[
       {path:'emp', component:EmployeeComponent} // child Routing
     ]}, // default component
  {path:'create', component:CreateDeptComponent},
  {path:'edit/:id', component:EditDeptComponent}, // define route parameter
  {path:'lazy', loadChildren:()=>import('./../lib/app.lazy.module')
            .then(mdl=>mdl.LazyModule)}, // search module, load it, and load the module instance with child route lazily
  {path:'**', redirectTo:''} // redirect to default component if match not found in URL
];

@NgModule({
  // Registering the Route Table at Root Level of the Current Module
  imports: [RouterModule.forRoot(routes)],
  // Exporting the RouteModule, this will also export the RouteTable
  exports: [RouterModule]
})
export class AppRoutingModule { }
