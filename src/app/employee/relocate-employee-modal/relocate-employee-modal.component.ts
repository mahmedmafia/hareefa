import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { FormControl } from '@angular/forms';
import { Department } from '../department';

@Component({
  selector: 'app-relocate-employee-modal',
  templateUrl: './relocate-employee-modal.component.html',
  styleUrls: ['./relocate-employee-modal.component.scss'],

})
export class RelocateEmployeeModalComponent implements OnInit {
  departments: Department[] = [];
  deparment = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<RelocateEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee, private empService: EmployeesService) {
  }
  ngOnInit(): void {
    this.empService.getDepartments().subscribe(res => {
      this.departments = res
      this.deparment.setValue(res[0]);
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
