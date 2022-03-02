import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffDetailComponent } from '../pages/staff-detail/staff-detail.component';
import { DepartmentDetailComponent } from '../pages/department-detail/department-detail.component';
import { ListStaffComponent } from '../components/list-staff/list-staff.component';

const routes:Routes = [
  { path: 'staff/:id', component: StaffDetailComponent},
  { path: 'department/:id', component: DepartmentDetailComponent},
  { path: 'department/:id/list-staff', component: ListStaffComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CompanyRoutingModule { }
