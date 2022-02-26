import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-search-recipe",
  templateUrl: "./search-recipe.component.html",
  styleUrls: ["./search-recipe.component.css"],
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild("recipe") recipes: ElementRef;
  @ViewChild("place") places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;
  ingredients: any;
  healthLabels: any;
  venuesData: any;
  modalData: any;
  modalDataVenue: any;

  constructor(private serviceService: ServiceService) {}

  options = {
    method: "GET",
    url: "https://api.foursquare.com/v2/venues/search",
    headers: { Accept: "application/json" },
  };

  options1 = { method: "GET", headers: { Accept: "application/json" } };
  clientId = "EFLZMDWW0F0EKXLS1EME5OWNMHUKZTNG50L10MTG1UB0MGEU";
  clientSecret = "VMVGPYE42CSSYNHLR4F5X4NMLB4WAN2XEBMNGIHQDRJBLTSB";

  appId = "624f26d8";
  appKey = "d4e7e5e1d826581b282898bd86c88cc7";
  recipeData: any;

  ngOnInit() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.geolocationPosition = position;
      this.currentLat = position.coords.latitude;
      this.currentLong = position.coords.longitude;
    });
  }

  openModal(data: any) {
    this.modalData = data;
    console.log("hello", data);
  }

  openModalVenue(data: any) {
    this.modalDataVenue = data;
    console.log("hello", data);
  }

  getVenues() {
    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
      this.serviceService
        .getrecipes(this.appId, this.appKey, this.recipeValue)
        .subscribe(
          (data: any) => {
            if (data) {
              console.log("data", data);
              this.recipeData = data.hits;
            }
          },
          (error) => {
            console.log("error", error);
          }
        );
    }

    if (
      this.placeValue != null &&
      this.placeValue !== "" &&
      this.recipeValue != null &&
      this.recipeValue !== ""
    ) {
      /**
       * Write code to get place
       */
      this.serviceService
        .getrestaurants(
          this.clientId,
          this.clientSecret,
          this.recipeValue,
          this.placeValue
        )
        .subscribe(
          (data: any) => {
            if (data) {
              console.log("data", data);
              this.venuesData = data.results;
            }
          },
          (error) => {
            console.log("error", error);
          }
        );
    }
  }
}
