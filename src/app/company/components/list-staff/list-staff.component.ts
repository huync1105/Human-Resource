import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Staff } from '../../models/staff';
import { Department } from '../../models/department';
import { HandleDataService } from '../../services/handle-data.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

  id?: number;
  staffs: Staff[] = [];
  value: string = '';
  departments: Department[] = [];

  button: any = {
    add: "fas fa-plus",
    back: 'fas fa-angle-left', 
    yellow: '#FFD88C',
    red: '#FF7B7B',
    green: '#A8FFA6'
  }

  constructor(
    private handleDataService: HandleDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStaffs();
    this.getDepartments();
    this.search();
  }

  getStaffs() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    if (this.id) {
      this.handleDataService.getStaffs().subscribe(staffs => this.staffs = staffs)
      this.staffs = this.staffs.filter(s => s.idDpm === this.id)
    } else {
      this.handleDataService.getStaffs().subscribe(staffs => this.staffs = staffs)
    }
  }

  getDepartments() {
    this.handleDataService.getDepartments().subscribe(
      d => this.departments = d
    )
  }

  search() {
    if (this.value !== '') {
      this.staffs = this.staffs.filter(s => s.name.toLowerCase().includes(this.value))
    } else {
      this.getStaffs();
    }
  }


  goBack() {
    this.location.back();
  }
}
