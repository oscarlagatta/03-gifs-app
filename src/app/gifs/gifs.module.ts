import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ShareModule} from "../share/share.module";

import {CardListComponent} from './components/card-list/card-list.component';
import {CardComponent} from './components/card/card.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {HomePageComponent} from './pages/home/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [HomePageComponent]
})
export class GifsModule {
}
