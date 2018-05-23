import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
// @Output
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick($event) {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
