import { Observable, tap } from 'rxjs';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { RelocateEmployeeModalComponent } from '../relocate-employee-modal/relocate-employee-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns;
  skills = new Set<string>();
  filterForm: FormGroup;
  performances = [
    {
      from: 0,
      to:50,
      name: 'Weak',
    },
    {
      from: 70,
      to:100,
      name: 'Strong',
    },
    {
      from: 50,
      to:70,
      name: 'Normal',
    },
  ];
  constructor(
    private employeeServ: EmployeesService,
    private dialog: MatDialog
  ) {
    type modelProbs = keyof Employee;
    this.displayedColumns = [
      'name',
      'department',
      'performance',
      'skills',
      'action',
    ] as modelProbs[];
    this.filterForm = new FormGroup({
      performance: new FormControl(''),
      skill: new FormControl(''),
      search: new FormControl(''),
    })
  }
  ngOnInit(): void {
    this.employeeServ
      .getEmployees()
      .subscribe((res) => {
        this.employees = res;
        res.forEach(x => this.skills = new Set([...this.skills, ...x.skills]))
      });
  }
  relocateEmp(emp: Employee) {
    this.dialog.open(RelocateEmployeeModalComponent, { data: emp });
  }

  get performanceFilter() {
    return this.filterForm.controls['performance'].value;
  }
  get skillFilter() {
    return this.filterForm.controls['skill'].value;
  }
  get searchFilter() {
    return this.filterForm.controls['search'].value;
  }
}
