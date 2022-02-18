import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL="http://localhost:8087/employee-api";
  constructor(private httpClient:HttpClient) { }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL+"/getAllEmployees");
  }
  createEmployee(employee:Employee):Observable<Object>{
return this.httpClient.post(this.baseURL+"/add",employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+"/getEmployeeById/"+id);
  }
  updateEmployee(id:number, employee:Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.baseURL+"/updateEmployeeById/"+id,employee);
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(this.baseURL+"/deleteEmployeeById/"+id);
      }
}
