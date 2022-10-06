import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALLOWED_PAGE_SIZES, PAGE_SIZE_DEFAULT } from '@app/constant';

@Component({
	selector: 'app-room-grid',
	templateUrl: './room-grid.component.html',
	styleUrls: ['./room-grid.component.scss'],
})
export class RoomGridComponent implements OnInit {
	pageSize: number = PAGE_SIZE_DEFAULT;
	allowPageSizes: any = ALLOWED_PAGE_SIZES;
	dataSource = [{
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}, {
		id: 1,
		roomName: 'Phòng 1',
		peopleNumber: '2',
		status: 'Đang cho thuê'
	}];

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void { }

	goToDetails(data: any) {
		this.router.navigate(['..', data.id, 'info'], { relativeTo: this.route });
	}
}
