import { Component } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  planIcons= ["assets/images/icon-arcade.svg",
  "assets/images/icon-advanced.svg",
  "assets/images/icon-pro.svg"];
  planNames= ["Arcade","Advanced","Pro"];
  planFeeMonth= [9,12,15];
  planFeeYear= [90,120,150];

  toggle = false;

  toggleSwitch(){
    this.toggle = !this.toggle;
  }
}
