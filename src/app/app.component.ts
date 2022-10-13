import { Component } from '@angular/core';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';
import * as viMessages from 'devextreme/localization/messages/vi.json';
import { AppInfoService } from './shared/services/app-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Motel Manager';
  locale: string = 'en'

  constructor(private appService: AppInfoService) {
    this.initMessages();
    locale(this.locale);
  }

  initMessages() {
    loadMessages(viMessages);
    loadMessages(this.appService.getLocalesDictionary());
  }
}
