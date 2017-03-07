System.register(["@angular/core", "@angular/platform-browser", "./components/flashbox/flashbox.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, flashbox_component_1, CommonComponentsModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (flashbox_component_1_1) {
                flashbox_component_1 = flashbox_component_1_1;
            }
        ],
        execute: function () {
            CommonComponentsModule = class CommonComponentsModule {
            };
            CommonComponentsModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule],
                    declarations: [flashbox_component_1.FlashBoxComponent],
                    exports: [platform_browser_1.BrowserModule, flashbox_component_1.FlashBoxComponent]
                })
            ], CommonComponentsModule);
            exports_1("CommonComponentsModule", CommonComponentsModule);
        }
    };
});

//# sourceMappingURL=commoncomponents.module.js.map
