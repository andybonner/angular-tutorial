export class LikeButton {
  constructor(private _on: boolean, private _totalLikes: number) {}

  get on() {
    return this._on;
  }

  get totalLikes() {
    return this._totalLikes;
  }
  click() {
    this._totalLikes += (this._on) ? -1 : 1;
    this._on = !this._on;
  }
}
