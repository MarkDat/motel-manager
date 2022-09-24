import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guard";
import { RoomListComponent } from "./room-list/room-list.component";

const routes: Routes = [
	{
        path: '',
        component: RoomListComponent,
        canActivate: [AuthGuard],
        children: [],
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class RoomsRoutingModule {
}

