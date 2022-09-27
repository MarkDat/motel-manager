import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guard";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomsComponent } from "./rooms.component";

const routes: Routes = [
	{
        path: '',
        component: RoomsComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
			{
				path: 'list',
				data: {},
				canActivate: [AuthGuard],
                component: RoomListComponent,
			},
            {
				path: ':roomNo/edit',
                canActivate: [AuthGuard],
				component: RoomDetailComponent,
			},
        ],
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class RoomsRoutingModule {
}

