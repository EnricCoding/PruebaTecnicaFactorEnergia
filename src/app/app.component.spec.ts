import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Storage } from '@ionic/storage-angular';
import { TranslationService } from './shared/services/i18/translation.service';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        Storage,
        {
          provide: TranslationService,
          useValue: { setLanguage: jasmine.createSpy('setLanguage') }
        },
        TranslateService,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
