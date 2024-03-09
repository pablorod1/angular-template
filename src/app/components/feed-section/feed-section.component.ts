import { Component } from '@angular/core';

@Component({
  selector: 'app-feed-section',
  templateUrl: './feed-section.component.html',
  styleUrl: './feed-section.component.css'
})
export class FeedSectionComponent {
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
