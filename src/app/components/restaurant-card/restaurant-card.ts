import { Component, input , output} from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { StarRating } from "../star-rating/star-rating";

@Component({
  selector: 'app-restaurant-card',
  imports: [ StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  restaurant = input.required<Restaurant>();
  ratingChanged=output<{id:number; rating:number}>();

  onRatingChange(rating:number){
    this.ratingChanged.emit({
      id: this.restaurant().id,
      rating
    })
  }
}
