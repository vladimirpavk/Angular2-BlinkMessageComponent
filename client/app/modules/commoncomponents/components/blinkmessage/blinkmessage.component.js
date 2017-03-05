System.register(["@angular/core"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, __moduleName, BlinkMessageComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            BlinkMessageComponent = class BlinkMessageComponent {
                constructor() {
                    this.setTimeout = 2000;
                    this.popUpText = "All of these elements will be faded out using a CSS3 opacity transition.";
                    this.ok = false;
                    this.isShown = true;
                    this.intervalCounter = 0;
                    this.type = "primary";
                    this.position = "tm";
                    this.type_default = false;
                    this.type_primary = false;
                    this.type_success = false;
                    this.type_info = false;
                    this.type_warning = false;
                    this.type_danger = false;
                    this.position_tr = false;
                    this.position_tm = false;
                    this.position_tl = false;
                    this.position_cr = false;
                    this.position_cm = false;
                    this.position_cl = false;
                    this.position_br = false;
                    this.position_bm = false;
                    this.position_bl = false;
                }
                ngOnInit() {
                    this._title = "PopUp Component";
                    this.setType();
                    this.setPostion();
                }
                setType() {
                    switch (this.type) {
                        case "default":
                            {
                                this.type_default = true;
                                break;
                            }
                            ;
                        case "primary":
                            {
                                this.type_primary = true;
                                break;
                            }
                            ;
                        case "success":
                            {
                                this.type_success = true;
                                break;
                            }
                            ;
                        case "info":
                            {
                                this.type_info = true;
                                break;
                            }
                            ;
                        case "warning":
                            {
                                this.type_warning = true;
                                break;
                            }
                            ;
                        case "danger":
                            {
                                this.type_danger = true;
                                break;
                            }
                    }
                    console.log("Type primary : " + this.type_primary);
                }
                setPostion() {
                    switch (this.position) {
                        case "tr":
                            {
                                this.position_tr = true;
                                break;
                            }
                            ;
                        case "tm":
                            {
                                this.position_tm = true;
                                break;
                            }
                            ;
                        case "tl":
                            {
                                this.position_tl = true;
                                break;
                            }
                            ;
                        case "cr":
                            {
                                this.position_cr = true;
                                break;
                            }
                            ;
                        case "cm":
                            {
                                this.position_cm = true;
                                break;
                            }
                            ;
                        case "cl":
                            {
                                this.position_cl = true;
                                break;
                            }
                            ;
                        case "br":
                            {
                                this.position_br = true;
                                break;
                            }
                            ;
                        case "bm":
                            {
                                this.position_bm = true;
                                break;
                            }
                            ;
                        case "bl":
                            {
                                this.position_bl = true;
                                break;
                            }
                            ;
                    }
                    console.log("This position : " + this.position_tr);
                }
                blinkOnce() {
                    this.isShown = !this.isShown;
                    setTimeout(() => {
                        this.isShown = !this.isShown;
                    }, this.setTimeout);
                }
                startBlinking() {
                    //if already blinking do nothing
                    if (this.intervalCounter != 0)
                        return;
                    this.isShown = !this.isShown;
                    this.intervalCounter = setInterval(() => {
                        this.isShown = !this.isShown;
                    }, this.setTimeout);
                }
                stopBlinking() {
                    if (this.intervalCounter != 0) {
                        clearInterval(this.intervalCounter);
                        this.intervalCounter = 0;
                    }
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], BlinkMessageComponent.prototype, "setTimeout", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], BlinkMessageComponent.prototype, "popUpText", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Boolean)
            ], BlinkMessageComponent.prototype, "ok", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], BlinkMessageComponent.prototype, "type", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], BlinkMessageComponent.prototype, "position", void 0);
            BlinkMessageComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'blink-message',
                    templateUrl: 'blinkmessage.component.html',
                    styleUrls: ['blinkmessage.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], BlinkMessageComponent);
            exports_1("BlinkMessageComponent", BlinkMessageComponent);
        }
    };
});

//# sourceMappingURL=blinkmessage.component.js.map
