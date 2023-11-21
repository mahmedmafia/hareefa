import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'filterEmpTable'
})
export class FilterEmpTablePipe implements PipeTransform {

  transform(value: Employee[], search: string, performance: { from: number, to: number }, skill: string): Employee[] {
    if(!search && !performance && !skill) return value;
    return value.filter(x => {
      let validCount=3;
      if (search) {
        if (!x.department.toLowerCase().includes(search.toLowerCase()) && !x.name.toLowerCase().includes(search.toLowerCase())) {
          validCount-=1;
        }
      }
      if (performance ) {
          if(x.performance > performance.from && x.performance < performance.to){

          }else{
            validCount-=1;
          }
      }
      if(skill){
        if(!x.skills.includes(skill)) validCount-=1;
      }
      return validCount==3;
    })
  }

}
