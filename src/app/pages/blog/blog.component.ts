import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  isFollowing: boolean = false;
  followText: string = 'Follow Me';

  isLike: boolean = false;
  likecount: number = 200;

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.followText = this.isFollowing ? 'Following' : 'Follow Me';
  }

  toggleLike(){
    this.isLike = !this.isLike;
    if(this.isLike){
      this.likecount++;
    }
  }
}
