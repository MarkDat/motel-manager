import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { TitleGuard } from '@app/shared/guard/title.guard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [TitleGuard],
    data: {pageTitle: 'Bảng thống kê'},
    children: [],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class DasboardModule { }
