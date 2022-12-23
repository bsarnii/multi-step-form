import { Component } from '@angular/core';
import { SummaryDataService } from '../summary-data.service';
import { PagesService } from '../pages.service';

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

  selectedItem:any;
  selectItem(item:number):void{
    this.selectedItem = item;
    this.sumData.plan.name = this.planNames[item]
    this.sumData.plan.sumMonth = this.planFeeMonth[item]
    this.sumData.plan.sumYear = this.planFeeYear[item]

  }
  constructor(public sumData:SummaryDataService, public ps:PagesService){}
  
}
