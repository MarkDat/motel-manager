import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guard";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{path: '', redirectTo: 'room', pathMatch: 'full'},
			{
				path: 'dashboard',
				data: {},
				canActivate: [AuthGuard],
				loadChildren: () => import('@app/modules/admin/dashboard/dasboard.module').then(m => m.DasboardModule)
			},
			{
				path: 'room',
				data: {},
				canActivate: [AuthGuard],
				loadChildren: () => import('@app/modules/admin/rooms/rooms.module').then(m => m.RoomsModule)
			}
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class AdminRoutingModule {
}

