import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressBar, MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



import {
  MatDialogModule,
} from '@angular/material/dialog';
import { RelocateEmployeeModalComponent } from './relocate-employee-modal/relocate-employee-modal.component';
import { DialogModule } from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterDepartmentPipe } from './relocate-employee-modal/filter-department.pipe';
import { FilterEmpTablePipe } from './employee-list/filter-emp-table.pipe';
const routes: Routes = [
  { path: "", pathMatch: 'full', component: EmployeeListComponent }
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    RelocateEmployeeModalComponent,
    FilterDepartmentPipe,
    FilterEmpTablePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    DialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EmployeeModule { }
