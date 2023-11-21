import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>('assets/employees_mock.json');
  }

  getDepartments() {
    return this.http.get<Department[]>('assets/departments_mock.json');

  }
  updateEmployeeDepartment() {

  }


  requestDepartmentRelocation(empId: number, targetDepartment: string) {

  }
}
