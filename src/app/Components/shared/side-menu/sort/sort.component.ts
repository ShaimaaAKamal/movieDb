import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  standalone: false,
  
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
sortSelection:string="Popularity Descending";
sortOptions:string[]=[
  "Popularity Descending",
  "Popularity Ascending",
  "Rating Descending",
  "Rating Ascending",
  "Release Date Descending",
  "Release Date Ascending",
  "Title (A-Z)",
  "Title (Z-A)"
]

sortBy(sortOption:string){
  this.sortSelection=sortOption;
}
}
