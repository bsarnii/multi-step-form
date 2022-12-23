import { Component } from '@angular/core';
import { PagesService } from './pages.service';
import { SummaryDataService } from './summary-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ps:PagesService, public sumData:SummaryDataService){}


  nextStep(){
    if (this.ps.page===2 && !this.sumData.plan.name) {
      this.ps.error = true;
      
    } else {
      console.log(this.sumData.plan)
      this.ps.error = false;
      this.ps.plusPage();
    }
  }
  
}
