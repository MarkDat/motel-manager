import { Component } from '@angular/core';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';
import * as viMessages from 'devextreme/localization/messages/vi.json';
import dxDateBox from 'devextreme/ui/date_box';
import { AppInfoService } from './shared/services/app-info.service';
import { CommonFunction } from './shared/utilities/common-funtion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Motel Manager';
  locale: string = 'en'

  constructor(private appService: AppInfoService) {
    this.initDefaultDateBox();
    this.initMessages();
    locale(this.locale);
  }

  initMessages() {
    loadMessages(viMessages);
    loadMessages(this.appService.getLocalesDictionary());
  }

  initDefaultDateBox() {
    dxDateBox.defaultOptions({
      options: {
        onInitialized: (e) => {
            e.component.dateOption('onFocusOut', (e) => {
              CommonFunction.formatDateBox(e);
            });
        },
      }
    });
  }
}
