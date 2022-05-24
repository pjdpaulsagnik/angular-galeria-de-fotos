import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../shared/user-details.service';
import { ProfileUserDetails } from 'src/shared/tokenserviceauthentication.service';
import { UserAuthentication } from 'src/shared/user-authentication.service';
import { specificuserposts } from '../shared-models/posts.model';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  data : string;

  searchedData : specificuserposts[] = [];

  public searchInput : string;

  constructor(public userObj: UserDetails, public userAuthObj: UserAuthentication, private setData : ProfileUserDetails) {
    console.log(this.userObj);
   }

  ngOnInit(): void {
    this.setData.getCurrentLoggedUserDetails(this.setData.username).subscribe( response => {
      console.log(response);
      this.setData.setidToSession(response['userID']);
    }, err => {
      console.log(err);
    })

    this.userObj.fetchAllUsersPost().subscribe( res => {
      console.log(res);
      this.userObj.allUserPosts = res;
    }, err => {
      console.log(err);
    }
    )
  }

      //create search functionality
    //   search(){
    //     const filter = (document.getElementById("searchArea") as HTMLInputElement).value.toUpperCase();

    //     const list = document.getElementById("list");
    //     const box = list.getElementsByTagName("div");

    //     for(let i = 0; i < box.length ; i++){
    //         const availableDocumentName = box[i].getElementsByTagName("h2")[0];

    //         if(availableDocumentName){
    //             const name = availableDocumentName.innerText || availableDocumentName.innerHTML;
    //             if(name.toUpperCase().indexOf(filter) > -1){
    //                 box[i].style.display = "";
    //             }
    //             else{
    //                 box[i].style.display = "none";
    //             }
    //         }
    //     }
    // }


    valuechange(value :string){
      this.searchInput = value;
      console.log("Value Change : ",this.searchInput);
      // console.log("posts : ",this.userObj.allUserPosts);
        // console.log("Filtered Data", this.userObj.allUserPosts.filter(
        // ))

      function isBigEnough(element : specificuserposts, index, array) {
          return (value == element.postTitle);
       }

       console.log(" Filtered Data : ",this.userObj.allUserPosts.filter(isBigEnough));

       this.searchedData = this.userObj.allUserPosts.filter(isBigEnough);
       console.log("Test Value : " + this.searchedData);

      // console.log("SearchedData = ",this.searchedData);

    }
}
