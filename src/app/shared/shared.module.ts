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
  DxLookupCustomComponent,
} from '@app/shared/components';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxDrawerModule,
  DxListModule,
  DxLoadPanelModule,
  DxLookupModule,
  DxNumberBoxModule,
  DxPopoverModule,
  DxPopupModule,
  DxScrollViewModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxTreeViewModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { TruncatePipe, MoneyStringPipe, CapitalizeFirstLetterPipe } from '@app/pipe';
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
  DxLookupModule,
  DxValidatorModule,
];

export const COMPONENTS = [
  FooterComponent,
  SideNavigationMenuComponent,
  HeaderComponent,
  UserPanelComponent,
  RoomGridComponent,
  RoomFormComponent,
  RoomGeneralComponent,
  DxLookupCustomComponent,
];

export const PIPES = [TruncatePipe, MoneyStringPipe, CapitalizeFirstLetterPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES],
  exports: [...COMMON_MODULES, ...DEV_EXTREME_MODULES, ...COMPONENTS],
})
export class SharedModule {}
