import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'employee-list',
  template:`<h2> employee list</h2>
            <ul *ngFor ="let employee of employees">
            <li> {{employee.name}}</li>
            </ul>`,
  styles: []
})

export class EmployeeListComponent implements OnInit {
  public employee:any= [];
  constructor(private _employeeservice: EmployeeService ) { }

  ngOnInit(){
    // this._employeeservice.getAll()
    //     .subscribe(data => this.employees = data);
  }

}
