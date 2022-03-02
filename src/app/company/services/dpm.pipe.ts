import { Pipe, PipeTransform } from '@angular/core';
import { Staff } from '../models/staff';
import { Department } from '../models/department';
import { DEPARTMENTS } from '../models/department-mock';

@Pipe({name: 'convert'})

export class Convert implements PipeTransform {
  transform(idDpm: number, department: Department): number {
    idDpm = DEPARTMENTS.findIndex(d => d.id = department.id) + 1;
    return idDpm;
  }
}