import { Place } from './../place.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../places.service';

import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  numTimesLeft = 5;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private placesService: PlacesService) {

  }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

}
