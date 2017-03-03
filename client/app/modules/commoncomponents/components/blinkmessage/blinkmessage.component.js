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
                }
                ngOnInit() {
                    this._title = "PopUp Component";
                }
                flashOnce() {
                    this.isShown = !this.isShown;
                    setTimeout(() => {
                        this.isShown = !this.isShown;
                    }, this.setTimeout);
                }
                startFlashing() {
                    this.isShown = !this.isShown;
                    setInterval(() => {
                        this.isShown = !this.isShown;
                    }, this.setTimeout);
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
