import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input type="text" class="text form-control"
           placeholder="Search gifs..."
           #txtTagInput
           (keyup.enter)="searchTag()"
    />
  `
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private readonly gifsService: GifsService) {
  }

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // console.log({newTag});
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";
  }
}
