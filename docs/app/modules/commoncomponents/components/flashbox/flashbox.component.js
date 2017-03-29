"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let FlashBoxComponent = class FlashBoxComponent {
    constructor() {
        this.isShown = true;
        //counter handler
        this.intervalCounter = 0;
        this._type = "primary";
        this._position = "tr";
        this._maxwidth = "300px";
        this._setTimeout = 2000;
        this.style_type = [false, false, false, false, false, false];
        this.style_position = [false, false, false, false, false, false, false, false, false];
    }
    set type(value) {
        this._type = value;
        this.setType();
    }
    set position(value) {
        this._position = value;
        this.setPosition();
    }
    set maxwidth(value) {
        this._maxwidth = value;
    }
    set setTimeout(value) {
        this._setTimeout = value;
    }
    ngOnInit() {
        this.setType();
        this.setPosition();
    }
    setType() {
        switch (this._type) {
            case "default":
                {
                    this.style_type = [true, false, false, false, false, false];
                    break;
                }
                ;
            case "primary":
                {
                    this.style_type = [false, true, false, false, false, false];
                    break;
                }
                ;
            case "success":
                {
                    this.style_type = [false, false, true, false, false, false];
                    break;
                }
                ;
            case "info":
                {
                    this.style_type = [false, false, false, true, false, false];
                    break;
                }
                ;
            case "warning":
                {
                    this.style_type = [false, false, false, false, true, false];
                    break;
                }
                ;
            case "danger":
                {
                    this.style_type = [false, false, false, false, false, true];
                    break;
                }
        }
    }
    setPosition() {
        switch (this._position) {
            case "tr":
                {
                    this.style_position = [true, false, false, false, false, false, false, false, false];
                    break;
                }
                ;
            case "tm":
                {
                    this.style_position = [false, true, false, false, false, false, false, false, false];
                    break;
                }
                ;
            case "tl":
                {
                    this.style_position = [false, false, true, false, false, false, false, false, false];
                    break;
                }
                ;
            case "cr":
                {
                    this.style_position = [false, false, false, true, false, false, false, false, false];
                    break;
                }
                ;
            case "cm":
                {
                    this.style_position = [false, false, false, false, true, false, false, false, false];
                    break;
                }
                ;
            case "cl":
                {
                    this.style_position = [false, false, false, false, false, true, false, false, false];
                    break;
                }
                ;
            case "br":
                {
                    this.style_position = [false, false, false, false, false, false, true, false, false];
                    break;
                }
                ;
            case "bm":
                {
                    this.style_position = [false, false, false, false, false, false, false, true, false];
                    break;
                }
                ;
            case "bl":
                {
                    this.style_position = [false, false, false, false, false, false, false, false, true];
                    break;
                }
                ;
        }
    }
    flashOnce() {
        this.isShown = !this.isShown;
        setTimeout(() => {
            this.isShown = !this.isShown;
        }, this._setTimeout);
    }
    show() {
        this.isShown = false;
    }
    hide() {
        this.isShown = true;
    }
    startFlashing() {
        //if already blinking do nothing
        if (this.intervalCounter != 0)
            return;
        this.isShown = !this.isShown;
        this.intervalCounter = setInterval(() => {
            this.isShown = !this.isShown;
        }, this._setTimeout);
    }
    stopFlashing() {
        if (this.intervalCounter != 0) {
            clearInterval(this.intervalCounter);
            this.intervalCounter = 0;
            //check if left in state visible
            if (!this.isShown)
                this.isShown = true;
        }
    }
};
__decorate([
    core_1.Input("type"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FlashBoxComponent.prototype, "type", null);
__decorate([
    core_1.Input("position"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FlashBoxComponent.prototype, "position", null);
__decorate([
    core_1.Input("maxwidth"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FlashBoxComponent.prototype, "maxwidth", null);
__decorate([
    core_1.Input("setTimeout"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], FlashBoxComponent.prototype, "setTimeout", null);
FlashBoxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'flash-box',
        templateUrl: 'flashbox.component.html',
        styleUrls: ['flashbox.component.css']
    }),
    __metadata("design:paramtypes", [])
], FlashBoxComponent);
exports.FlashBoxComponent = FlashBoxComponent;

//# sourceMappingURL=flashbox.component.js.map
