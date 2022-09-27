import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from '@app/shared/shared.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms-routing.module';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
  ],
  imports: [
    SharedModule,
    RoomsRoutingModule,
  ]
})
export class RoomsModule { }
