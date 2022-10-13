import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

  isMobile: boolean = false;
  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isMobile = this.deviceDetectorService.isMobile();
  }

  ngOnInit(): void {
  }

}
