import { Pipe, PipeTransform } from '@angular/core';
import { Staff } from '../models/staff';
import { Department } from '../models/department';

@Pipe({name: 'filter'})

export class Filter implements PipeTransform {
  transform(staff: Staff, departments: Department[]): string{
    let department;
    department = departments.find(d => d.id === staff.idDpm)
    if (department) {
      return department.name
    } else {
      return ''
    }
  }
}