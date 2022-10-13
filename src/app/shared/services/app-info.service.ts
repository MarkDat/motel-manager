import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AppInfoService {
	pageTitleBehavior = new BehaviorSubject<string>('');
	_locales: Locale[] = [{
		Name: 'English',
		Value: 'en',
	  }, {
		Name: 'Vietnamese',
		Value: 'vi',
	  }];

	_dictionary: Dictionary = {
		en: {
		  Number: 'Number',
		},
		vi: {

		}
	};

	constructor() { }

	public get title() {
		return 'Motel Manager';
	}

	public get currentYear() {
		return new Date().getFullYear();
	}

	public getLocales() {
		return this._locales;
	}

	public getLocalesDictionary() {
		return this._dictionary;
	}
}


export class Locale {
	Name: string;
	Value: string;
}

export class Dictionary {
	[key: string]: any;
}
