import {Subscription} from 'rxjs';

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
}