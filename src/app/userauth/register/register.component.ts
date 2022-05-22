import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertBox } from  '../../shared-models/alert.model';
import { UserAuthentication , UserDataModule } from 'src/shared/user-authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f', {static:false}) registrationForm: NgForm;
  @ViewChild('imgPreview', {static:false}) imgPreview: ElementRef;
  imageInput = null;
  success : string;
  constructor(private regServObj: UserAuthentication) { }

  public msg: AlertBox = {type:'',msg:'',validity:false};
  
  ngOnInit(): void {
  }
  register(){
    console.log(this.registrationForm.value);

    this.msg.msg = "Sending Data....";
    this.msg.type = "alert-primary";
    this.msg.validity = true;

    if(this.registrationForm.value.password !== this.registrationForm.value.confirm_password){
      console.log("pass doesnt match");
      //throw an error if doesnt match
      //as of now just returning and dropping the api call.
    }
    // api call to post the request.

    const obj: UserDataModule = {
      fullname: this.registrationForm.value.fname + ' ' + this.registrationForm.value.lname,
      username: this.registrationForm.value.username,
      email: this.registrationForm.value.email, 
      password: this.registrationForm.value.password,
      bio: this.registrationForm.value.userbio,
      usertype: this.registrationForm.value.usertype,
      file: this.fileUploaded
    };

    this.regServObj.registerANewAccount(obj).subscribe(response => {
      console.log(response);
      // this.registrationForm.reset();
      this.msg.msg = "Successfully Created Account, PLEASE REMEMBER Your USERNAME and PASSWORD";
      this.msg.type = "alert-success";
    }, err => {
      console.log(err);
      console.log("Error Code = > ",err.status);
      console.log("Error Message = > ",err.error);
      this.msg.msg = err.error;
      this.msg.type = "alert-danger";
    });
  }

  fileUploaded: File;

  updateFileName(event, inputObj1: HTMLInputElement, inputObj2: HTMLElement){
    let name = inputObj1.value.split("\\");
    inputObj2.innerText = name[name.length-1];

    this.fileUploaded = event.target.files[0];

    let reader = new FileReader();

    reader.onload = (e: any) => {
        this.imageInput = e.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
    
  }
}
