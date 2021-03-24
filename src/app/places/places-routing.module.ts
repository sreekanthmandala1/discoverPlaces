import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlacesPage } from "./places.page";

const routes: Routes = [
  {
    path: "tabs",
    component: PlacesPage,
    children: [
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: "./discover/discover.module#DiscoverPageModule",
          },
          {
            path: ":placeId",
            loadChildren:
              "./discover/place-detail/place-detail.module#PlaceDetailPageModule",
          },
        ],
      },
      {
        path: "offers",
        children: [
          {
            path: "",
            loadChildren: "./offers/offers.module#OffersPageModule",
          },
          {
            path: "new",
            loadChildren: "./offers/offers.module#NewOfferPageModule",
          },
          {
            path: "edit/:placeId",
            loadChildren:
              "./offers/edit-offer/edit-offer.module#EditOfferPageModule",
          },
          {
            path: ":placeId",
            loadChildren:
              "./offers/offer-bookings/offer-bookings.module#OfferBookingsPage",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/places/tabs/discover",
    pathMatch: "full",
  },
  {
    path: "discover",
    loadChildren: () =>
      import("./discover/discover.module").then((m) => m.DiscoverPageModule),
  },
  {
    path: "offers",
    loadChildren: () =>
      import("./offers/offers.module").then((m) => m.OffersPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
