import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../services/employeeService';
import{Employees} from '../models/employeeModel';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empdetails: any=[];
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployee();
  }

  fetchEmployee()
  {
    this.empdetails = this.empservice.getEmployee().subscribe((data)=>
    {this.empdetails=data; console.log(data)})
    console.log(this.empdetails);
  }

}
