import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainroute-component',
  template: `
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>
            <a [routerLink]="['']">List Departments</a>
          </th>
          <th>
            <a [routerLink]="['create']">Create Department</a>
          </th>
          <th>
            <a [routerLink]="['lazy']">Lazy Dynamic</a>
          </th>
        </tr>
      </thead>
    </table>
    <hr/>
    <router-outlet></router-outlet>

  `
})

export class MainRouteComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
