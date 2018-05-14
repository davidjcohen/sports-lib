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
var data_number_1 = require("./data.number");
var DataDistance = /** @class */ (function (_super) {
    __extends(DataDistance, _super);
    function DataDistance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataDistance.prototype.getDisplayValue = function () {
        return this.getValue() >= 1000 ? (this.getValue() / 1000).toFixed(2) : this.getValue().toFixed(1);
    };
    DataDistance.prototype.getDisplayUnit = function () {
        return this.getValue() >= 1000 ? 'Km' : 'm';
    };
    DataDistance.className = 'DataDistance';
    DataDistance.type = 'Distance';
    DataDistance.unit = 'm';
    return DataDistance;
}(data_number_1.DataNumber));
exports.DataDistance = DataDistance;