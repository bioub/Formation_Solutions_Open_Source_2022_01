import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HelloComponent } from './hello/hello.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReplacePipe } from './replace.pipe';
import { CounterComponent } from './counter/counter.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HelloComponent,
    UserFormComponent,
    ReplacePipe,
    CounterComponent,
    HelloworldComponent,
    MultiStateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
