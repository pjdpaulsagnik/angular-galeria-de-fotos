import { Component, OnInit, Input, OnDestroy, VERSION } from '@angular/core';
import { ProfileUserDetails, profileImage } from 'src/shared/tokenserviceauthentication.service';
import { profileuserdata, specificuserposts } from 'src/app/shared-models/posts.model';
import { LoginComponent } from 'src/app/userauth/login/login.component';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { UserDetails } from 'src/shared/user-details.service';
import { PostStorage } from 'src/shared/post-storage.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{



  postEach : specificuserposts;

  constructor( public userobj: ProfileUserDetails, private route: ActivatedRoute , public prfdt : UserDetails ,  public userobjposts: UserDetails, public postServObj : PostStorage )
  {this.route.params.subscribe(
    (params : Params) => {
      this.ngOnInit(); // not cool at all to do this. not cool must be taken care **later**
    }
  ); }

  ngOnInit(): void {
    this.userobj.getCurrentLoggedUserDetails(this.route.snapshot.params['username']).subscribe(res => {
      console.log(res);
      this.userobj.setDetails(res['username'], res['bio'], res['userID']);
    }, err => {
      console.log(err);
    });

    // users profile posts.
    this.postServObj.fetchCurrentUsersPost().subscribe(res => {
      console.log(res);
      this.postServObj.userposts = res;
    }, err =>{
      console.log(err);
    })

    this.userobj.fetchCurrentUserProfileImage().subscribe( resp => {
      console.log(resp);
      this.userobj.profileImageData = resp;
      this.userobj.setImageLink(resp['profileimageid']);
    }, erro => {
      console.log(erro);
    })
  }



  __DEBUG__(x){
    console.log("val of x: " , x);
  }

}
