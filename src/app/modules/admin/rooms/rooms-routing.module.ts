import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard, TitleGuard } from "@app/guard";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomsComponent } from "./rooms.component";
import { RoomDetailsComponent } from "./room-details/room-details.component";

const routes: Routes = [
    {
        path: '',
        component: RoomsComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                data: {
                    pageTitle: 'Danh sách phòng trọ'
                },
                canActivate: [AuthGuard, TitleGuard],
                component: RoomListComponent,
            },
            {
                path: ':id/info',
                data: {
                    pageTitle: 'Phòng'
                },
                canActivate: [AuthGuard, TitleGuard],
                component: RoomDetailsComponent,
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoomsRoutingModule {
}

