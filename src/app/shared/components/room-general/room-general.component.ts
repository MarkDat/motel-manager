import { Component, OnInit } from '@angular/core';
import { DISPLAY_FORMAT_DATETIME } from '@app/constant';

@Component({
  selector: 'app-room-general',
  templateUrl: './room-general.component.html',
  styleUrls: ['./room-general.component.scss']
})
export class RoomGeneralComponent implements OnInit {

  now = new Date();
  displayFormatDatetime = DISPLAY_FORMAT_DATETIME;
  constructor() { }

  ngOnInit(): void {
  }

}
