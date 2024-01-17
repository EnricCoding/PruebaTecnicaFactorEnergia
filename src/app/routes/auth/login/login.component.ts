import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { ModalController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username: string = '';
  password: string = '';
  credentials = { username: 'enric', password: 'admin' }

  constructor(
    public modalController: ModalController,
    public router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {}

  loginFormSubmit() {
    if (this.username == this.credentials.username && this.password == this.credentials.password) {
      let userCredentials: User = {
        userName: this.username,
        password: this.password,
        email: `${this.username}@gmail.com`,
        address: "Rambla de la Pau Nº63",
        registrationDate: new Date(),
        photoUrl: './../../../assets/img/avatar.jpg'
      }
      this.authService.setUserCredentials(userCredentials)
      this.router.navigate(['app-consult-invoices'])
    } else {
      this.openModal()
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: Capacitor.isNativePlatform() ? 'phone-small-modal' : 'pc-small-modal',
      componentProps: {
        'modalTitle': "error",
        'modalText': "errorFound",
      }
    });
    modal.onDidDismiss().then((modelData) => {
    });
    return await modal.present();
  }

}
