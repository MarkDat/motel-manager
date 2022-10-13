import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  SideNavigationMenuComponent,
  HeaderComponent,
  UserPanelComponent,
  RoomGridComponent,
  RoomGeneralComponent,
} from '@app/shared/components';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxDrawerModule,
  DxListModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxPopoverModule,
  DxPopupModule,
  DxScrollViewModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import { TruncatePipe, MoneyStringPipe } from '@app/pipe';
import { RoomFormComponent } from './components/room-form/room-form.component';

export const COMMON_MODULES = [CommonModule, RouterModule];

export const DEV_EXTREME_MODULES = [
  DxListModule,
  DxButtonModule,
  DxLoadPanelModule,
  DxScrollViewModule,
  DxDrawerModule,
  DxTreeViewModule,
  DxToolbarModule,
  DxContextMenuModule,
  DxPopupModule,
  DxPopoverModule,
  DxDataGridModule,
  DxNumberBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
];

export const COMPONENTS = [
  FooterComponent,
  SideNavigationMenuComponent,
  HeaderComponent,
  UserPanelComponent,
  RoomGridComponent,
  RoomFormComponent,
  RoomGeneralComponent,
];

export const PIPES = [TruncatePipe, MoneyStringPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES],
  exports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES, ...COMPONENTS],
})
export class SharedModule {}
