import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppInfoService } from '../services/app-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appInfo: AppInfoService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.handleGetPageTitle(route.data['pageTitle']);
    return true;
  }

  handleGetPageTitle(pageTitle: string) {
    this.appInfo.pageTitleBehavior.next(pageTitle || '');
  }

}
