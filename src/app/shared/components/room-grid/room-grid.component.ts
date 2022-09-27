import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALLOWED_PAGE_SIZES, PAGE_SIZE_DEFAULT } from '@app/constant';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {
  pageSize: number = PAGE_SIZE_DEFAULT;
  allowPageSizes: any = ALLOWED_PAGE_SIZES;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
