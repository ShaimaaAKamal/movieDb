import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
@Input() movieSectionName:string="Popular Movies";
}
