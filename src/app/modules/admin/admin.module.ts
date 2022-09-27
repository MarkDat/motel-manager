import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AdminRoutingModule } from '@app/modules/admin/admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideNavOuterToolbarComponent } from '@app/shared/components/side-nav-outer-toolbar/side-nav-outer-toolbar.component';

@NgModule({
  declarations: [
    AdminComponent,
    SideNavOuterToolbarComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
