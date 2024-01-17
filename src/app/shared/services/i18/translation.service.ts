import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/enums/language.enum';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    this.init();
   }

   private init(): void {
    this.translate.setDefaultLang(Languages.en); 
    this.translate.use(Languages.en); 
  }

  setLanguage(language: string): void {
    this.translate.use(language);
  }
   
}
