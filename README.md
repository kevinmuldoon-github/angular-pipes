# Angular Pipes Repository
A repository of Angular pipes to help you transform data, filter data, change data types and more. I have created this repository for my own reference, but I am sure other Angular users will find it helpful too.

Check out [Transforming Data Using Pipes](https://angular.io/guide/pipes) to learn more about Angular Pipes.

# Angular Pipes

Available pipes:

* **IsBoolean** - Returns true if the value passed in is a boolean (true or false). Returns false if a boolean is not passed in.

## Usage

Pipes can be imported into your project by declaring them in app.module.ts. For example, for the IsBoolean type, you can make the pipe accessible throughout your project using the following.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsBooleanPipe } from './is-boolean.pipe'; // Import the pipe into your file

@NgModule({
  declarations: [
    AppComponent,
    IsBooleanPipe // Add the pipe to your declarations array
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Pipes can also be imported into standalone Angular files by using standalone: true and importing the pipe. Please read the [official Angular guide on standalone components](https://angular.io/guide/standalone-components) for more information on integrating pipes in this way.
```
@Component({
  standalone: true,
  selector: 'my-home-page',
  imports: [IsBooleanPipe],
  template: `
    ... My home page is amazing!
  `,
```
Once a pipe has been imported, you can use it in your templates using the pipe (|) symbol.

```
<p *ngIf="myTrueValue | isBoolean">The value is a boolean.</p>
<p *ngIf="myFalseValue | isBoolean">The value is not a boolean.</p>
```
