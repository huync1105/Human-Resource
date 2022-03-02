import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './company/pages/home/home.component';
import { StaffDetailComponent } from './company/pages/staff-detail/staff-detail.component';
import { DepartmentDetailComponent } from './company/pages/department-detail/department-detail.component';
import { ListStaffComponent } from './company/components/list-staff/list-staff.component';
import { DepartmentListComponent } from './company/pages/department-list/department-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: DepartmentListComponent },
      { path: 'staff/:id', component: StaffDetailComponent},
      { path: 'department/:id', component: DepartmentDetailComponent},
      { path: 'department/:id/list-staff', component: ListStaffComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
