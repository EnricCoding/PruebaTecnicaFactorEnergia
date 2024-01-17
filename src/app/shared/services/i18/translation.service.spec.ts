import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: {}
        }
      })],
      providers: [
        TranslateStore,
        {
          provide: TranslationService,
          useValue: { setLanguage: jasmine.createSpy('setLanguage') }
        },
        TranslateService,
        TranslateModule
      ]
    });
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
