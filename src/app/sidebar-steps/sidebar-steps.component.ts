import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-steps',
  templateUrl: './sidebar-steps.component.html',
  styleUrls: ['./sidebar-steps.component.scss']
})
export class SidebarStepsComponent {
  @Input() number:number = 1;
  @Input() detail:string= " ";
  @Input() active:string="";
}
