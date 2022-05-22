import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertBox } from  '../../shared-models/alert.model';
import { UserAuthentication , UserDataModule } from 'src/shared/user-authentication.service';
import { UserDetails } from 'src/shared/user-details.service';
import { ProfileUserDetails } from 'src/shared/tokenserviceauthentication.service';
import { BackendDetails } from 'src/shared/apicallspath.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;

  public msg: AlertBox = {type:'',msg:'',validity:false};
  
  userState: any;

  constructor(private router: Router, private route: ActivatedRoute,private userServObj: UserAuthentication, private userObjServ: ProfileUserDetails,public prfdt : UserDetails) { }

  ngOnInit(): void {
    
  }
  login(){

    this.msg.msg = "Sending Data....";
    this.msg.type = "alert-primary";
    this.msg.validity = true;
    
    this.userServObj.loginUser(this.loginForm.value).subscribe( res => {
      
      console.log(res);
      this.userObjServ.setJWTToSession(res['token']);
      this.userServObj.isLoggedIn = true;
      //console.log('USER OBJ SERV: ', this.userObjServ);
      console.log("YOU HAVE JUST LOGGED IN");         
      this.msg.msg = "Successfully Logged In";
      this.msg.type = "alert-success";
      this.router.navigate(['/home']); // go to the homepage.
    
    }, err => {
      
      console.log("ERROR OCCURED", err.error.msg);
      console.log("Error Code = > ",err.error.status);
      console.log("Error MSG = > ",err.error.message);
      this.msg.msg = "WRONG USERNAME OR PASSWORD";
      this.msg.type = "alert-danger";
    
    })
    
  }

}
