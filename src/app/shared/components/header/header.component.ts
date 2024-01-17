import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Routes } from 'src/app/enums/routes.enum';
import { TranslationService } from '../../services/i18/translation.service';
import { Languages } from 'src/app/enums/language.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  isConsultInvoices: boolean = false;
  isProfile: boolean = false;
  selectedLanguage: string = Languages.es;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationService: TranslationService
   ) { }

  ngOnInit() {
    const currentRoute = this.route?.snapshot?.url?.join('/');
    if (currentRoute === Routes.ConsultInvoices) {
      this.isConsultInvoices = true
      this.isProfile = false
    } else if (currentRoute === Routes.Profile) {
      this.isConsultInvoices = false
      this.isProfile = true
    }
  }

  goToProfile() {
    this.router.navigate(['app-user-profile'])
  }

  goToConsultInvoices() {
    this.router.navigate(['app-consult-invoices'])
  }

  logOut() {
    this.router.navigate([''])
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
  }

}
