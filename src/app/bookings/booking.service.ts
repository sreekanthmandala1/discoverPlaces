import { Injectable } from '@angular/core';
import { BookingModel } from './booking.model';


Injectable({providedIn: 'root'});
export class BookingService{

 // tslint:disable-next-line: variable-name
 private _bookings: BookingModel[] = [
  {
   id : 'xyz',
   placeId: 'p1',
   userId: 'abc',
   guestNumber: 1,
   placeTitle: 'Manhattan Mansion',
  }
 ];

 get bookings(){
  return [...this._bookings];
 }
}
