import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading=false;
  constructor(private authService: AuthService, private router: Router, private loadingCtrl : LoadingController) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.isLoading=true;
    this.loadingCtrl.create({keyboardClose:true, message:'logging in...'}).then(loadingEl=>{
      loadingEl.present();
      setTimeout(() => {
        this.isLoading=false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1000);
    });
    
  }
}
