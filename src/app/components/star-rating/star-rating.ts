import { Component, input, output ,signal} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  //recoit la note du restaurant
  currentRating= input.required<number>();

  //envoie la note recu au parent
  ratingChanged= output<number>();

  // état local : quelle étoile est survolée (0 = aucune)
  hoveredRating = signal<number>(0);

  //appelle lorsqu on clique sur le parent
  setRating(value:number){
    //cliquer 2 fois pour enlever
    if (this.currentRating() === value){
      this.ratingChanged.emit(0);
    } else{
      this.ratingChanged.emit(value);
    }
  }
    onMouseEnter(star: number) {
    this.hoveredRating.set(star);
  }

  onMouseLeave() {
    this.hoveredRating.set(0);
  }
}

