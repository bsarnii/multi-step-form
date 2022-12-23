import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  buttonText = "Next Step"
  page = 1;
  error = false;
  constructor() { }
  plusPage(){
    if (this.page === 3) {
      this.buttonText = "Confirm"
    } else {
      this.buttonText = "Next Step"
    }
    this.page++
  }
  minusPage(){
    if (this.page === 5) {
      this.buttonText = "Confirm"
    } else {
      this.buttonText = "Next Step"
    }
    this.page--
  }
  toPageTwo(){
    this.page = 2;
    this.buttonText = "Next Step"
  }
}
