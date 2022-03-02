import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department';
import { HandleDataService } from '../../services/handle-data.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[] = []; 

  constructor(
    private handleDataService: HandleDataService
  ) { }

  ngOnInit(): void {

    this.getDepartments();

  }

  getDepartments() {
    this.handleDataService.getDepartments()
    .subscribe(departments => this.departments = departments)
  }

}
