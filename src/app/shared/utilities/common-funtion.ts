import {Subscription} from 'rxjs';
import * as moment from 'moment/moment';
import { COMPARE_OPERATIONS } from '@app/enum';

export class CommonFunction {
    public static unsubscribe(subscriptions: Subscription[]) {
		(subscriptions || []).forEach(subscription => {
			if (subscription) {
				subscription.unsubscribe();
			}
		});
	}

	public static getObjNested(objOrArr: any, itemsName: string, key: string, value: string) { // , itemsName: string, key: string, value: any
		if(objOrArr instanceof Array) {
			for (let i = 0; i < objOrArr.length - 1; i++) {
				return this.getObjNested(objOrArr[i], itemsName, key, value);
			}
		}
		
		const keyArr = Object.keys(objOrArr);
		if(keyArr.includes(itemsName)) 
			return this.getObjNested(objOrArr[itemsName], itemsName, key, value);
		
		if(!!objOrArr[key] && value.startsWith(objOrArr[key])) {
			return objOrArr;
		}
		
		return null;
	}
	
	public static IsKeyCodeMatch(keyEvent, keyNum, keyCode) {
		let code;
		if (keyEvent.key !== undefined) {
			code = keyEvent.key;
		} else if (keyEvent.event.key !== undefined) {
			code = keyEvent.event.key;
		} else if (keyEvent.keyIdentifier !== undefined) {
			code = keyEvent.keyIdentifier;
		} else if (keyEvent.keyCode !== undefined) {
			code = keyEvent.keyCode;
		} else if (keyEvent.event.keyCode !== undefined) {
			code = keyEvent.event.keyCode;
		}

		return code === keyCode || code === keyNum;
	}

	public static compareDate(date1: Date, date2: Date, operation = COMPARE_OPERATIONS.Equal) {
		const valueDate1 = moment(new Date((new Date(date1)).toDateString()), 'DD/MM/YYYY').valueOf();
		const valueDate2 = moment(new Date((new Date(date2)).toDateString()), 'DD/MM/YYYY').valueOf();

		if (operation === COMPARE_OPERATIONS.Equal) {
			// tslint:disable-next-line:triple-equals
			return valueDate1 == valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.NotEqual) {
			// tslint:disable-next-line:triple-equals
			return valueDate1 != valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.StrictEqual) {
			return valueDate1 === valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.StrictNotEqual) {
			return valueDate1 !== valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.GreaterThan) {
			return valueDate1 > valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.GreaterThanOrEqual) {
			return valueDate1 >= valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.LessThan) {
			return valueDate1 < valueDate2;
		}
		if (operation === COMPARE_OPERATIONS.LessThanOrEqual) {
			return valueDate1 <= valueDate2;
		}

		return false;
	}

	private static convertCorrectYear(inputYear: any) {
		const overYearPos = 10; // Can modify
		const fullYear = new Date().getFullYear().toString();
		const nowYearPre = fullYear.substring(0, 2);
		// tslint:disable-next-line: radix
		let nowYearPreNumber = parseInt(nowYearPre);
		// tslint:disable-next-line: radix
		const nowYearPosNumber = parseInt(fullYear.substring(2, 4));
		// tslint:disable-next-line: radix
		const inputYearPos = parseInt(inputYear.substring(2, 4));
		// tslint:disable-next-line: radix
		const inputYearPre = parseInt(inputYear.substring(0, 2));
		let outputYear = '';

		if ((inputYearPre == nowYearPreNumber || inputYearPre == 0)
			&& inputYearPos > nowYearPosNumber + overYearPos) {
			nowYearPreNumber--;
			outputYear = `${nowYearPreNumber}${inputYearPos}`;
		} else
			if (inputYearPre == 0) { // year have 2 num
				outputYear = `${nowYearPre}${inputYearPos}`;
			} else {
				outputYear = inputYear;
			}
		return outputYear;
	}

	public static formatDateBox(ev: any) {
		if (!ev.event) {
			return;
		}
		const now = new Date();
		const userInput = ev.event.target.value;
		let oldValue: null;
		let newValue: any = null;

		if (moment(userInput, 'DD/MM/YYYY', true).isValid()) {
			return;
		}

		if (/^\d{1,2}\/\d{1,2}\/\d{1,4}$/.test(userInput)) {
			const inputDate = userInput.split('/')[0];
			const inputMonth = userInput.split('/')[1];
			const inputYear = userInput.split('/')[2];
			const correctYear = inputYear != null && inputYear.length === 4 ? inputYear : this.convertCorrectYear(inputYear);

			newValue = new Date(parseInt(correctYear), parseInt(inputMonth) - 1, parseInt(inputDate));
			ev.component.instance().option('value', );
		}

		if (/^\d{1,2}$/.test(userInput)) {
			const inputDate = userInput.split('/')[0];

			newValue = new Date(now.getFullYear(), now.getMonth(), parseInt(inputDate));
		}

		if (/^\d{1,2}\/\d{1,2}$/.test(userInput)) {
			const inputDate = userInput.split('/')[0];
			const inputMonth = userInput.split('/')[1];

			newValue = new Date(now.getFullYear(), parseInt(inputMonth) - 1, parseInt(inputDate));
		}

		oldValue = ev.component.instance().option('value');
		if (newValue && oldValue && this.compareDate(newValue, oldValue)) {
			ev.component.dateValue(null, ev);
		}

		if (newValue) {
			ev.component.dateValue(newValue, ev);
		}
	}
}