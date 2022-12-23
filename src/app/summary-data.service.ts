import { Injectable } from '@angular/core';
import { Plan } from './Plan';

@Injectable({
  providedIn: 'root'
})
export class SummaryDataService {

  toggle = false;
  toggleSwitch(){
    this.toggle = !this.toggle;
  }
  
  calcTotal() {
    let total:number = 0;
    if (!this.toggle) {
      total = this.plan.sumMonth;
      for(let i=0; i< this.plan.addOns.length; i++) {
        if (this.plan.addOns[i].checked) {
          total += this.plan.addOns[i].priceMonth
        }
      }
    } else {
      total = this.plan.sumYear;
      for(let i=0; i< this.plan.addOns.length; i++) {
        if (this.plan.addOns[i].checked) {
          total += this.plan.addOns[i].priceYear;
        }
      }
    }
    return total
  }

  plan:Plan = {
    name: "",
    sumMonth: 0,
    sumYear: 0,
    addOns: [
      {
        addOnName: "Online Service",
        priceMonth: 1,
        priceYear: 10,
        checked: false
      },
      {
        addOnName: "Larger storage",
        priceMonth: 2,
        priceYear: 20,
        checked: false
      },
      {
        addOnName: "Customizable profile",
        priceMonth: 2,
        priceYear: 20,
        checked: false
      },

    ]
  }

  constructor() { }
}
