import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private router: Router, private authService: AuthenticationService) {
     this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {

        this.authService.authenticationState.subscribe(state => {
          console.log('Auth changed: ', state)
          if(state) {
            this.router.navigate(['members', 'specialists'])
          } else {
            this.router.navigate(['login'])
          }
        })
      })
    }
}
