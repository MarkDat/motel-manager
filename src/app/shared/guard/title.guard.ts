import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppInfoService } from '../services/app-info.service';

@Injectable({
	providedIn: 'root'
})
export class TitleGuard implements CanActivate {
	constructor(private appInfo: AppInfoService) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		this.handleGetpageTitle(route.data['pageTitle']);
		return true;
	}

	handleGetpageTitle(pageTitle: string) {
		console.log(pageTitle);

		this.appInfo.pageTitleBehavior.next(pageTitle || '');
	}

}
