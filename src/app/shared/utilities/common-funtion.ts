import {Subscription} from 'rxjs';

export class CommonFunction {
    public static unsubscribe(subscriptions: Subscription[]) {
		(subscriptions || []).forEach(subscription => {
			if (subscription) {
				subscription.unsubscribe();
			}
		});
	}
}