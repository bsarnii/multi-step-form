import { Component } from '@angular/core';
import { SummaryDataService } from '../summary-data.service';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  constructor(public sumData:SummaryDataService, public ps:PagesService){}
 
  addOn1=this.sumData.plan.addOns[0];
  addOn2=this.sumData.plan.addOns[1];
  addOn3=this.sumData.plan.addOns[2];

}
