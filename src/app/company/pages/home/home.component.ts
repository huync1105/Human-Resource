import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navBtn: any = {
    home: 'fas fa-home',
    homeColor: '#FFD88C',
    staff: 'fas fa-user-friends',
    staffColor: '#A8FFA6',
    fontSize: '32px',
    routerHome: '/home',
    routerStaff: 'department/:id/list-staff',
    markHome: false,
    markStaff: true,
  }

  constructor() { }

  ngOnInit(): void {

    this.homeRoute();
    this.staffRoute();
    
  }


  homeRoute() {
    this.navBtn.markHome = true;
    this.navBtn.markStaff = false;
  }

  staffRoute() {
    this.navBtn.markHome = false;
    this.navBtn.markStaff = true;
  }

}
