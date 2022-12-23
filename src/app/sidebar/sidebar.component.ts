import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

constructor(public ps:PagesService){
}
}
