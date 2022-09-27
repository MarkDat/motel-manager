import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guard";
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
        ],
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class RoomsRoutingModule {
}

