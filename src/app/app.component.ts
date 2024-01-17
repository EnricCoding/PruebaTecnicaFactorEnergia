import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslationService } from './shared/services/i18/translation.service';
import { Languages } from './enums/language.enum';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private storage: Storage,
    private translationService: TranslationService,
    private platform: Platform
    ) {
    const defaultLanguage = Languages.es
    this.translationService.setLanguage(defaultLanguage)
    if (Capacitor.isNativePlatform()) {
      this.initilizeApp()
    }
  }

  async initilizeApp() {
    this.platform.ready().then(async () => {
      await this.storage.create();
    })
  }
}
