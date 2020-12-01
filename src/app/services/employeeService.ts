import {HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'; 
import {NgForm} from '@angular/forms';
import { Employees } from '../models/employeeModel';

@Injectable()
export class EmployeeService
{
    constructor (private http:HttpClient, private http1:HttpClient)
    {

    }
    url = "http://localhost:58029/api";
    details:Employees;
    getEmployee ()
    {
        //debugger;
        return this.http.get(this.url+"/employee");
    }
    postEmployee ()
    {
        //debugger;
        return this.http.post(this.url+"/",JSON.stringify(this.details));
    }
}