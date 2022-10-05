import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AppInfoService {
	pageTitleBehavior = new BehaviorSubject<string>('');

	constructor() { }

	public get title() {
		return 'Motel Manager';
	}

	public get currentYear() {
		return new Date().getFullYear();
	}
}
