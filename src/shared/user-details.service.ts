import { Injectable } from "@angular/core";
import {UserPost , specificuserposts } from "../app/shared-models/posts.model";
import { profileuserdata } from 'src/app/shared-models/posts.model';
import { HttpClient } from '@angular/common/http';
import { BackendDetails } from 'src/shared/apicallspath.service';

@Injectable({providedIn:'root'})
export class UserDetails {

    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){}

    allUserPosts : specificuserposts[] = [] ;

    allPost: UserPost[] = [
        new UserPost("$Sagnik",23,"./assets/newtimes.jpg",5500,"Cities of fun","Dream To be achieved", true),
        new UserPost("@Sonali",21,"./assets/travelquotefeature.jpg",3510,"Immoral Souls of the heavens","Dream To be excel",true),
        new UserPost("#Rideep#",23,"https://i.imgur.com/yPzhR5e.png",2120,"Cities of Glory","Dream To be free",false),
        new UserPost("%Sajid%",23,"./assets/charles_dickens.jpg",1020,"Cities of Eutropia","Dream To be Born",true),
        new UserPost("^Subhadeep^",24,"./assets/afterlife.jpg",5125,"Cities of Joy","Dream To be Reconstructed",false),
        new UserPost("&Subhankar&",25,"./assets/impossible.jpg",1520,"Cities of Joy","Dream To be established",false)
    ];
    userposts: UserPost[] = [
        new UserPost("immortal@6",10,'./assets/over.jpg',100,'lorem ipsum','Dolor*555',false),
        new UserPost("immortal@6",11,'./assets/purpose.jpg',102,'Fascolati','Dolor*555',false),
        new UserPost("immortal@6",13,'./assets/decision.jpeg',99,'Dora Dora','Dolor*555',false),
        new UserPost("immortal@6",15,'https://i.imgur.com/yPzhR5e.png',1,'lorem ipsum fascolati','Dolor*555',false),
        new UserPost("immortal@6",20,'./assets/icon.png',5,'lorem ipsum torante','Dolor*555',false)

    ];

    fetchAllUsersPost(){
        return this.http.get<specificuserposts[]>(this.backendConfigObj.fetchAllPosts, {
        });
    }

    //fetch from backend and init all these.
    // new UserPost(WHOS POST,POST_ID,IMGLINK,TOTAL LIKES,POST TITLE,POST DESCRIPTION, LOGGED_IN_USER_LIKED_IT_OR_NOT),
}