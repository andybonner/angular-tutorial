"use strict";
// import {Point} from './point';
//
// let point = new Point(1, 2);
// point.draw();
Object.defineProperty(exports, "__esModule", { value: true });
var likeButton_1 = require("./likeButton");
var component = new likeButton_1.LikeButton(false, 10);
component.click();
console.log("Likes: " + component.totalLikes + "; is selected: " + component.on);
