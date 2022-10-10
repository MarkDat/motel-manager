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
}