import { Component, input , output, signal, computed} from '@angular/core';
import { RestaurantCard } from "../restaurant-card/restaurant-card";
import { Restaurant } from '../../models/restaurant.model';
@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  restaurants=input<Restaurant[]>([]);
  ratingChanged=output<{id:number; rating:number}>();

  onRatingChange(event:{id:number; rating:number}){
    this.ratingChanged.emit(event);
  }
  
}