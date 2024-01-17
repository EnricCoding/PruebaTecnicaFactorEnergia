import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { dateToString } from 'src/app/utils';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent  implements OnInit {

  user: User = { userName: "", password: "", email: "", address:"", registrationDate: new Date(), photoUrl: "" };
  editMode: boolean = false;
  formatRegistrationDate: string = ""

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserCredentials().then((user: User) => {
      this.user = user
      let currentDate = new Date(user?.registrationDate)
      this.formatRegistrationDate = dateToString(currentDate)
    })
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveUserInformation() {
    this.authService.setUserCredentials(this.user)
  }

}
