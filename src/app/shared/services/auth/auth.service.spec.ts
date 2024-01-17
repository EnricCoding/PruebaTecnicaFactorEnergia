import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Storage
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
