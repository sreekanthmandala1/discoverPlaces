import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BookingModel } from './booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  providers: [BookingService],
})


export class BookingsPage implements OnInit {

  loadedBooking: BookingModel[];
  items: any[] = [];
  constructor(private bookingService: BookingService) { 
    
  }

  ngOnInit() {
    this.loadedBooking = this.bookingService.bookings;
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
    // cancel booking with id offerid
  }

}
