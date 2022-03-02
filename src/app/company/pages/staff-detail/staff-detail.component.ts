import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Staff } from '../../models/staff';
import { HandleDataService } from '../../services/handle-data.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  // button
  button: any = {
    add: "fas fa-plus",
    back: 'fas fa-angle-left', 
    yellow: '#FFD88C',
    red: '#FF7B7B',
    green: '#A8FFA6'
  }

  // staff
  staffs: Staff[] = [];
  staff?: Staff;
  name: string = '';
  thumbnail: string = '';
  phone: number = 0;
  selectedValue: number = 0;

  // departments
  departments: Department[] = [];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private handleDataService: HandleDataService
    ) { }
    
    ngOnInit(): void {
      this.getStaff();
    }
    
    getStaff() {
      const id = Number(this.route.snapshot.paramMap.get('id'))!;
      this.handleDataService.getStaff(id).subscribe(staff => this.staff = staff);
      this.handleDataService.getDepartments().subscribe(departments => this.departments = departments)
    }

    deleteStaff() {
      if (this.staff) {
        this.handleDataService.deleteStaff(this.staff)
      }
      this.location.back();
    }

    goBack() {
      this.location.back();
    }

    addStaff() {
      this.handleDataService.getStaffs().subscribe(staffs => this.staffs = staffs)
      const newStaff = {
        id: this.staffs.length + 1,
        idDpm: Number(this.selectedValue),
        name: this.name,
        phone: this.phone,
        thumbnail: this.thumbnail
      }
      if (
        this.name !== ''
        && this.phone !== 0
        && this.selectedValue !== 0
        && this.thumbnail !== ''
      ) {
        this.handleDataService.addStaff(newStaff).subscribe();
        this.location.back();
      } else {
        alert ('You have to fill all field')
      }
      // console.log(newStaff);
    }

    
}
