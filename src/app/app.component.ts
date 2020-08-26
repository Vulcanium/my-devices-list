import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{

  secondes: number; //Observer de counter
  counterSubscription: Subscription;

  constructor(){}

  ngOnInit() {

    const counter = interval(1000); //Observable de secondes

    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Oh oh, une erreur vient de se produire : ' + error);
      },
      () => {
        console.log('Observable terminé !');
      }
    );

  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
