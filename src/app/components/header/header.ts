import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  ratedCount= input<number>();

  ratemoyenne = input <number>();

   isMenuOpen = false;
ratedRestaurants: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
