import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'capitalizeFirstLetterPipe'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

	transform(value: any): any {
		if (!value) {
			return '';
		}

		value = value.toLowerCase().replace('(*)', '');
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}
