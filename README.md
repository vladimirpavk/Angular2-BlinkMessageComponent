# Angular2-FlashBox component example application 
FlashBox component is angular2 component provided to display simple user information messages.

Application skeleton used for development can be found here [Angular2 - Application skeleton](https://github.com/vladimirpavk/Angular2-Skeleton/)

### Prerequisites
Must have node and npm installed.

### How to start application
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings install
```

Start application with 
```sh
$ gulp
```
Application will be initialy compiled and started. By default the server is listening on port 3000. 
Application can be accessed through your web browser on url **localhost:3000**. 

### How to use FlashBox component
FlashBox component is (for now only) part of the CommonComponents module.

In order to use the module you must configure your module loader. In case you use **systemjs** module loader add the following mapings:
```
System.config({
    ...
    map: {
        'commoncomponents': 'node_modules/commoncomponents'
    }
    ...
})
```

In your application module definition file import CommonComponents module.
```
... 
Import { CommonComponentsModule} from '/commoncomponents/commoncomponents.module';
...
@NgModule({
    ...
     imports:      [ CommonComponentsModule ],
    ...
})
```

Now we can use FlashBox component in our module declared component template using <flash-box> element.

Place your  HTML based user information message inside *flash-box* element.

```
<flash-box>
        <!-- Message -->
</flash-box> 

```

### Inputs

### Attributes
```
    <flash-box [type]="type_value" [position]="position_value" [max-width]="maxwidth_value" [setTimeout]="setTimeout_value>
        HTML message
    </flash-box>    
```

### Actions

1. **type:** *string*, default: **primary**
Specify type of flash box. Available types: **default**, **primary**, **success**, **info**, **warning**, **danger** based on default bootstrap label types

2. **position:** *string*, default: **tr**. Specify position of flash box. 
Available values:
  * **tr** - top-right,
  * **tm** - top-middle,
  * **tl** - top-left,
  * **cr** - center-right,
  * **cm** - center-middle,
  * **cl** - center-left,
  * **br** - bottom-right,
  * **bm** - bottom-middle,
  * **bl** - bottom-left

3. **max-width:** *string*, default: *300px*
Specify max-width of flash box component

4. **setTimeout** *number*, default: *2000*
Specify timeout (number of **ms** the control is visible) in **ms**. Default is **2 sec**.

### Actions

In order to cause an flashbox control action use angular2 template local variable system.

#### **Template example**
```
    <flash-box .... #tlv_name>
        ....
    </flash-box>
    
    <button (click)="tlv_name.available_action">Cause flashbox action</button>
```
#### **Controller example**
reference component 
```
import { FlashBoxComponent } from 'commoncomponents/components/flashbox.component';
```
reference component from template local variable using 
```
@ViewChild("tlv_name") tlv:FlashBoxComponent;
tlv_name.available_action();
```

##### **Available actions:**
1. **flashOnce():** *void* - Show flashbox only once for **setTimeout** amount of time
2. **show():** *void* - Make control visible for unlimited amount of time (or untill some other action happens)
3. **hide():** *void* - Make control hidden for unlimited amount of time (or untill some other action happens)
4. **startFlashing():** *void* - Start flashing for unlimited amount of time (or untill some other action happens). Transition period from unvisble to visible is set to **0,5 sec** and is currently unconfigurable. The flashbox control us shown for **setTimeout** amount of time.
5. **stopFlashing():** *void* - Stop flashing


