import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { AppInfoService } from '@app/shared/services/app-info.service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  user = { name: 'Dat Luong',email: '' };

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      //this.authService.logOut();
    }
  }];

  pageTitle: string = '';

  constructor(private router: Router, private appInfo: AppInfoService) {
  }

  ngOnInit() {
    //this.authService.getUser().then((e) => this.user = e.data);
    this.getPageTitle();
  }
  
  getPageTitle() {
	this.appInfo.pageTitleBehavior.subscribe(pageTitle => {
		this.pageTitle = pageTitle;
	});
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}
