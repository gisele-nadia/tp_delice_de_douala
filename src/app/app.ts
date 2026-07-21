import { Component, signal,input, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Restaurant } from './models/restaurant.model';
import { RestaurantList } from "./components/restaurant-list/restaurant-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Header, RestaurantList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp_delice_de_douala');

  restaurants = signal<Restaurant[]>([ 
  { id: 1, name: 'Le Calao Doré', district: 'Akwa', 
    specialty: 'Ndolé aux crevettes', currentRating: 0 }, 
  { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso', 
    specialty: 'Eru aux pieds de bœuf', currentRating: 0 }, 
  { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo', 
    specialty: 'Poulet DG', currentRating: 0 }, 
  { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi', 
    specialty: 'Poisson braisé', currentRating: 0 }, 
  { id: 5, name: "L'Akwa Gourmand", district: 'Akwa', 
    specialty: 'Bobolo et sauce arachide', currentRating: 0 }, 
  { id: 6, name: 'Le Royal de Bali', district: 'Bali', 
    specialty: 'Koki et plantain', currentRating: 0 } 
]);
  ratedCount= computed(()=> this.restaurants().filter(r =>r.currentRating > 0).length);
  updateRating(event:{id:number; rating:number}){
    console.log(event);
    this.restaurants.update(list => list.map(r => r.id === event.id?{ ...r, currentRating: event.rating }:r));
  }

  ratemoyenne= computed(()=> {
    console.log(this.restaurants());
    const ratedRestaurants = this.restaurants().filter(r => r.currentRating > 0);
    if (ratedRestaurants.length === 0){
      return 0;
    }
    const total = ratedRestaurants.reduce((sum, r) => sum + r.currentRating ,0 );
    return total / ratedRestaurants.length;
  } )

  voirestaurants= signal<boolean>(false);
  afficherestaurants= computed(()=>{
    if (this.voirestaurants()){
     return this.restaurants().filter(r => r.currentRating > 4);
    }
    return this.restaurants();
  });
  affichertous(){
    this.voirestaurants.update(current => !current)
  }
  trie=signal<boolean>(false);

  trierestaurants= computed(()=>{
    if(this.trie()){
      return[ ...this.restaurants()].sort((a,b)=> b.currentRating - a.currentRating);
    }
    return this.restaurants();  
  })

  trieaffiche(){
    this.trie.update(current => !current)
  }
  
  }



