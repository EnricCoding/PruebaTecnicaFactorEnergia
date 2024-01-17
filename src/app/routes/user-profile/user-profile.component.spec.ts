import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './user-profile.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/models/user.model';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(waitForAsync(() => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['getUserCredentials', 'setUserCredentials']);
    const mockUser: User = { userName: 'Enric', password: 'Testing', email: 'enric.testing@example.com', address: '123 Vilanova i la Geltru', registrationDate: new Date(), photoUrl: 'avatar.jpg' };
    authServiceMock.getUserCredentials.and.returnValue(Promise.resolve(mockUser));

    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: () => new TranslateFakeLoader(),
          },
        }),
      ],
      providers: [
        Storage,
        TranslateService,
        { provide: AuthService, useValue: authServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user information on ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick();

    expect(authServiceSpy.getUserCredentials).toHaveBeenCalled();

    expect(component.user).toEqual(jasmine.objectContaining({
      userName: 'Enric',
      password: 'Testing',
      email: 'enric.testing@example.com',
      address: '123 Vilanova i la Geltru',
      registrationDate: jasmine.any(Date),
      photoUrl: 'avatar.jpg'
    }));

  }));
});
