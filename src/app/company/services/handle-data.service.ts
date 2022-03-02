import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff } from '../models/staff';
import { Department } from '../models/department';
import { STAFFS } from '../models/staffs-mock';
import { DEPARTMENTS } from '../models/department-mock';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  constructor() { }

  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS)
  }

  getDepartment(id: number): Observable<Department> {
    const department = DEPARTMENTS.find(d => d.id === id)!;
    return of(department)
  }

  getStaffs(): Observable<Staff[]> {
    return of(STAFFS)
  }

  getStaff(id: number): Observable<Staff> {
    const staff = STAFFS.find(s => s.id === id)!;
    return of(staff)
  }

  saveDepartment(value: string, id: number): any {
    const department = DEPARTMENTS.fill({id: id, name: value}, id - 1, id);
    return department
  }

  deleteStaff(staff: Staff): Observable<Staff[]>{
    let index;
    index = STAFFS.findIndex(s => s.id === staff.id)
    STAFFS.splice(index, 1);
    return of(STAFFS)
  }

  addStaff(staff: Staff): Observable<Staff[]> {
    STAFFS.push(staff)
    return of(STAFFS)
  }

}
