import { Component } from '@angular/core';
import { SummaryDataService } from '../summary-data.service';


@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
  constructor(public sumData:SummaryDataService){}
  addOnTopTexts:string[] = ["Onlince service","Larger storage","Customizable profile"];
  addOnBottomTexts:string[] = ["Access to multiplayer games","Extra 1TB of cloud save","Custom theme on your profile"];
  addOnMonthFees:number[] = [1,2,2];
  addOnYearFees:number[] = [10,20,20];

  selectedItems:boolean[] = [false,false,false]

  selectItem(item:number):void{
    this.selectedItems[item] = !this.selectedItems[item];
    this.sumData.plan.addOns[item].checked = this.selectedItems[item];
  }
}
