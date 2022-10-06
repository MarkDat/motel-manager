import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from '@app/shared/shared.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomDetailsComponent } from './room-details/room-details.component';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomDetailsComponent,
  ],
  imports: [
    SharedModule,
    RoomsRoutingModule,
  ]
})
export class RoomsModule { }
