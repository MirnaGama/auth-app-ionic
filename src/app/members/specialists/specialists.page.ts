import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.page.html',
  styleUrls: ['./specialists.page.scss'],
})
export class SpecialistsPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
