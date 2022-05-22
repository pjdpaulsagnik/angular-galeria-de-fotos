
class Comment{
   commentPassed:string;
   commentedBy:string;
   constructor(com, by){
      this.commentPassed = com;
      this.commentedBy = by;
   }
}

export class profileuserdata{
   username: string;
   id: string;
   bio: string;
   usertype: string;
   fullname: string;
   email: string;
   password: string;
   constructor(username,id,bio,usertype,fullname,email,password){
      this.bio = bio;
      this.email = email;
      this.fullname = fullname;
      this.id = id;
      this.password = password;
      this.username = username;
      this.usertype = usertype;
   }
}

export class UserPost{
   username: string;
   postid: string;
   postLink: string;
   totalLikeCount: number;
   postTitle: string;
   postDescription : string;
   hasLiked: boolean;
   hasCommented:Comment[];
   constructor(username,postid,postLink,totalLikeCount,postTitle, postDescription, hasLiked){
      this.postid = postid;
      this.username = username;
      this.postLink = postLink;
      this.totalLikeCount = totalLikeCount;
      this.postTitle = postTitle;
      this.postDescription = postDescription;
      this.hasLiked = hasLiked;
   }
   setCommentOnPost(userCommenting, commentString){
      (this.hasCommented == null)?this.hasCommented = []:console.log(); //working as of now, should be better in future.
      this.hasCommented.push(new Comment(commentString,userCommenting) );
   }
}

// export class specificuserpost {
//    postid : string;
//    userid : string;
//    posttitle : string;
//    postTitle : string;
//    postdescription : string;
//    postDescription : string;
//    postImage : string;
//    PostImage : string;
// }

export class specificuserposts {
   postId : string;
   userId : string;
   posttitle : string;
   postTitle : string;
   postdescription : string;
   postDescription : string;
   fileName : string;
   fileType : string;
   data : string;
   hasLiked: boolean;
   hasCommented:Comment[];
   constructor(postId,postTitle, postDescription, hasLiked){
      this.postId = postId;
      this.postTitle = postTitle;
      this.postDescription = postDescription;
      this.hasLiked = hasLiked;
   }
   setCommentOnPost(userCommenting, commentString){
      (this.hasCommented == null)?this.hasCommented = []:console.log(); //working as of now, should be better in future.
      this.hasCommented.push(new Comment(commentString,userCommenting) );
   }
}
