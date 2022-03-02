import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Department } from '../../models/department';
import { HandleDataService } from '../../services/handle-data.service';
import { Staff } from '../../models/staff';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  // button
  button: any = {
    back: 'fas fa-angle-left', 
    yellow: '#FFD88C',
    red: '#FF7B7B',
    green: '#A8FFA6'
  }

  id: number = 0;
  department?: Department;
  staffs?: Staff[];

  constructor(
    private handleDataService: HandleDataService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getData();

  }

  getData() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.handleDataService.getDepartment(this.id)
    .subscribe(department => this.department = department)
    this.handleDataService.getStaffs().subscribe(
      staffs => this.staffs = staffs
    )
    this.staffs = this.staffs?.filter(s => s.idDpm === this.id)
  }

  goBack() {
    this.location.back();
  }

  save() {
    let value = this.department?.name;
    if (value && value !== '') {
      this.handleDataService.saveDepartment(value, this.id);
      this.location.back()
    }
  }
}
