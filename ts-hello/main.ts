// import {Point} from './point';
//
// let point = new Point(1, 2);
// point.draw();

import {LikeButton} from './likeButton';

let component = new LikeButton(false, 10);
component.click();
console.log(`Likes: ${component.totalLikes}; is selected: ${component.on}`);
