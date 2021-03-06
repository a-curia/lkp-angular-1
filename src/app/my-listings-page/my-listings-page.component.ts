import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor() { }

  ngOnInit() {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId): void {
    alert(`Deleting your listing with id = ${listingId}`);
  }

}
