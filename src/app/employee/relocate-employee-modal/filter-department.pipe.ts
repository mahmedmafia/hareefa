import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../department';

@Pipe({
  name: 'filterDepartment'
})
export class FilterDepartmentPipe implements PipeTransform {

  transform(departments:Department[],empDepartment:string): Department[] {
    return departments.filter(dep=> dep.name!=empDepartment);
  }

}
