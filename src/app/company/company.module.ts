import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
import { StaffDetailComponent } from './pages/staff-detail/staff-detail.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { BtnComponent } from './components/btn/btn.component';
import { NavBtnComponent } from './components/nav-btn/nav-btn.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { Filter } from './services/data.pipe';
import { Convert } from './services/dpm.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    DepartmentDetailComponent,
    StaffDetailComponent,
    ListStaffComponent,
    BtnComponent,
    NavBtnComponent,
    DepartmentListComponent,
    Filter,
    Convert
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ]
})
export class CompanyModule { }
