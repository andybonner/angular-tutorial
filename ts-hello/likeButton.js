"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(_on, _totalLikes) {
        this._on = _on;
        this._totalLikes = _totalLikes;
    }
    Object.defineProperty(LikeButton.prototype, "on", {
        get: function () {
            return this._on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "totalLikes", {
        get: function () {
            return this._totalLikes;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.click = function () {
        this._totalLikes += (this._on) ? -1 : 1;
        this._on = !this._on;
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
