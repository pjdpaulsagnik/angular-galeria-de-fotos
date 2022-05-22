import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostStorage } from 'src/shared/post-storage.service';
import { uploadpostdetails , UserAuthentication } from '../../shared/user-authentication.service';
import { AlertBox } from  '../shared-models/alert.model';
import { UserDetails } from 'src/shared/user-details.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('f', {static:false}) uploadForm: NgForm;
  @ViewChild('imgPreview', {static:false}) imgPreview: ElementRef;
  imageInput = null;

  constructor(private uploadServObj: PostStorage ,public uploadobjid : UserDetails) { }

  public msg: AlertBox = {type:'',msg:'',validity:false};

  allposts : any;

  ngOnInit(): void {
    this.uploadServObj.fetchuserID().subscribe( res => {
      this.uploadServObj.idforpost(res['userID']);
        console.log(res);
    },err => {
        console.log(err);
    })
  }

  upload(event){
    console.log(this.uploadForm.value);
    
    
    let obj = {
      posttitle : this.uploadForm.value.postname,
      postdescription : this.uploadForm.value.postdescription,
      postpath : this.fileUploaded
    };



    this.msg.msg = "Sending Data....";
    this.msg.type = "alert-primary";
    this.msg.validity = true;
    this.uploadServObj.uploadPst(obj).subscribe(response =>{
      console.log(response);
      if(response)
      {
        // this.allposts = response;
        // this.uploadServObj.userposts = this.allposts;

        this.uploadForm.reset();
        this.msg.msg = "Successfully Uploaded POST";
        this.msg.type = "alert-success";
      }
      },error => {
        console.log("Error = > ",error);
        // FROM SERVER END ERROR
        console.log("Error Code = > ",error.status);
        console.log("Error MSG = > ",error.message);
        this.msg.msg = error.message;
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
