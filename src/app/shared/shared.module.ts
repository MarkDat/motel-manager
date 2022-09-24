import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  SideNavigationMenuComponent,
  HeaderComponent,
  UserPanelComponent,
  RoomGridComponent,
} from '@app/shared/components';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxDataGridModule,
  DxDrawerModule,
  DxListModule,
  DxLoadPanelModule,
  DxPopoverModule,
  DxPopupModule,
  DxScrollViewModule,
  DxToolbarModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import { TruncatePipe, MoneyStringPipe } from '@app/pipe';

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
];

export const COMPONENTS = [
  FooterComponent,
  SideNavigationMenuComponent,
  HeaderComponent,
  UserPanelComponent,
  RoomGridComponent,
];

export const PIPES = [TruncatePipe, MoneyStringPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES],
  exports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES, ...COMPONENTS],
})
export class SharedModule {}
