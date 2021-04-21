import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
    new Place(
      'p1',
      'Manhattan',
      'In new york city',
      'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612',
      2300
    ),
    new Place(
      'p2',
      'suraram',
      'In my house',
      'https://assets.thehansindia.com/h-upload/2020/11/23/1013718-suraram.webp',
      6700
    ),
    new Place(
      'p3',
      'mumbai',
      'heart of india',
      'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      5400
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
  constructor() {}
}
