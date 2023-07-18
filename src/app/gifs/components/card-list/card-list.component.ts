import {Component, Input} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-card-list',
  template: `
      <div class="row">
          <gifs-card
                  *ngFor="let gif of gifs" [gif]="gif"
                  class="col-md-3 col-sm-6">
          </gifs-card>
      </div>
  `
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];

}
