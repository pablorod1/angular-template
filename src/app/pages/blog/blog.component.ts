import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  isFollowing: boolean = false;
  followText: string = 'Follow Me';

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.followText = this.isFollowing ? 'Following' : 'Follow Me';
  }
}
