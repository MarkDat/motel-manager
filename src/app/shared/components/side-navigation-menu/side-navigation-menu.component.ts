import { Component, NgModule, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunction } from '@app/shared/utilities/common-funtion';
import { adminNavigation, clientNavigation } from 'app/app-navigation';
import { DxTreeViewComponent } from 'devextreme-angular';

import * as events from 'devextreme/events';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements AfterViewInit, OnDestroy{
  @ViewChild(DxTreeViewComponent, { static: true })
  menu: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<string>();

  @Output()
  openMenu = new EventEmitter<any>();

  private _selectedItem: String;
  @Input()
  set selectedItem(value: String) {  
    this._selectedItem = value;
    
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  get isAdmin(): boolean {
    return true;
  }

  get navigate(): any{
    return this.isAdmin ? adminNavigation : clientNavigation;
  }

  private _items;
  get items() {
  
    if (!this._items) {
      this._items = this.navigate.map((item) => {
        if(item.path && !(/^\//.test(item.path))){ 
          item.path = `/${item.path}`;
        }
         return { ...item, expanded: !this._compactMode }
        });
    }

    return this._items;
  }

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }
  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }
    
    if (val) {
      this.menu.instance.collapseAll();
    } else {
      const isHaveItems = this.items.some(item => item.path === this._selectedItem && !!item.items);      
      if(isHaveItems) {
         this.menu.instance.expandItem(this._selectedItem);
      }
    }
  }

  user = { name: 'Dat Luong', email: '' };
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

  @Input() menuOpened: boolean = false;

  constructor(private elementRef: ElementRef, private router: Router) { }

  onItemClick(event) {
    this.selectedItemChanged.emit(event);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }

  onContentReady(e) {
    this.setItemNavCurrent();
  }

  setItemNavCurrent() {
    if(!this.selectedItem) { 
      const itemNav = this.navigate.find(data => {
        const objNav = CommonFunction.getObjNested(data, 'items', 'path', this.router.url);
        return !!objNav && objNav.path;
      });
      this.selectedItem = itemNav?.path || '#';
    }
  }

  onItemExpanded(e) {
    this.openMenu.next(e);
  }
}
