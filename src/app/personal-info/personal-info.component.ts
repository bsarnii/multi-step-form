import { Component, ViewChild } from '@angular/core';
import { PagesService } from '../pages.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

   @ViewChild('myForm') form: NgForm | undefined;

   // Error messages
   nameError:string = "";
   nameErrorBoolean:boolean = false;
   emailError:string = "";
   phoneError:string= "";
  onSubmit(){
    //name error
    if (this.form?.form.controls['name'].errors){
      this.nameError = "This field is required";
      this.nameErrorBoolean = true;
    } else {
      this.nameError = "";
      this.nameErrorBoolean = false;
    }
    //email error
    if (this.form?.form.controls['e-mail'].errors) {
      if (this.form?.form.controls['e-mail'].errors?.hasOwnProperty("email")) {
        this.emailError= "Invalid e-mail address";
      } else {
        this.emailError = "This field is required";
      } 
    } else {
      this.emailError = "";
    }
    // phone number
    if (this.form?.form.controls['telephone'].errors){
      this.phoneError = "This field is required";
    } else {
      this.phoneError = "";
    }
    console.log(this.form)
    if (this.form?.valid) {
      this.ps.plusPage();
    }
    
  }
  constructor(public ps:PagesService){}
}
