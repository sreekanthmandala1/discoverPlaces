
import { Place } from './../place.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../places.service';

import { IonInfiniteScroll } from '@ionic/angular';
import { HttpConfigService } from './discover.service';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  url: string;
  itemListData = [];
  page_number = 1;
  page_limit = 8;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private placesService: PlacesService,private httpConfigService: HttpConfigService) {}

  ngOnInit() {
    this.getEmployees(false, "");
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }



  getEmployees(isFirstLoad, event) {

    this.url = '?_page=' + this.page_number + '&_limit=' + this.page_limit;

    this.httpConfigService.getListItems(this.url)
      .subscribe((data: any) => {

        for (let i = 0; i < data.length; i++) {
          this.itemListData.push(data[i]);
        }

        if (isFirstLoad)
          event.target.complete();

        this.page_number++;
      }, error => {
        console.log(error);
      })
  }

  doInfinite(event) {
    this.getEmployees(true, event);
  }

  
  
  // loadData(event) {
    
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
  //     if (this.listedLoadedPlaces.length == 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  onFilterUpdate(event:any){  
    console.log('Segment changed', event);
  }
}
