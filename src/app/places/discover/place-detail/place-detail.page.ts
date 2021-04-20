import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  // onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.modalCtrl
    //   .create({ component: CreateBookingComponent, componentProps : {selectedPlace: this.place,
      
    //   }
    //   })
    //   .then((modalEl) => {
    //     modalEl.present();
    //   });

       onBookPlace() {
        this.modalCtrl.create({
          component: CreateBookingComponent,
          componentProps : {selectedPlace: this.place},
          cssClass: 'my-custom-class'
        }).then(modelEl=>{
          modelEl.present();
          return modelEl.onDidDismiss();
        })
        .then(resultData=>{
          console.log(resultData.data, resultData.role);
          if(resultData.role === 'confirm')
          console.log('booked!');
        })
        
      }
  
}
