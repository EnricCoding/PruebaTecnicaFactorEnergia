import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { Storage } from '@ionic/storage-angular';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(
    waitForAsync(() => {
      const authServiceMock = jasmine.createSpyObj('AuthService', ['setUserCredentials']);

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [IonicModule.forRoot(),
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: () => new TranslateFakeLoader(),
            },
          })],
        providers: [
          Storage,
          TranslateService,
          { provide: AuthService, useValue: authServiceMock },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginFormSubmit() and navigate when credentials are correct', () => {
    spyOn(component.router, 'navigate');
    component.username = 'enric';
    component.password = 'admin';
    component.loginFormSubmit();
    expect(authServiceSpy.setUserCredentials).toHaveBeenCalledOnceWith(jasmine.any(Object));
    expect(component.router.navigate).toHaveBeenCalledWith(['app-consult-invoices']);
  });

  it('should open modal when credentials are incorrect', () => {
    spyOn(component, 'openModal');
    component.username = 'wrongUsername';
    component.password = 'wrongPassword';
    component.loginFormSubmit();
    expect(authServiceSpy.setUserCredentials).not.toHaveBeenCalled();
    expect(component.openModal).toHaveBeenCalled();
  })

});
