"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_bare_1 = require("./data.bare");
var DataBoolean = /** @class */ (function (_super) {
    __extends(DataBoolean, _super);
    function DataBoolean(value) {
        return _super.call(this, value) || this;
    }
    DataBoolean.className = 'DataBoolean';
    return DataBoolean;
}(data_bare_1.DataBare));
exports.DataBoolean = DataBoolean;