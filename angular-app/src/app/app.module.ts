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
import { SelectComponent } from './select/select.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HelloComponent,
    UserFormComponent,
    ReplacePipe,
    CounterComponent,
    HelloworldComponent,
    MultiStateButtonComponent,
    SelectComponent,
    TodosComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, // exporte CommonModule, lui même exporte ngIf, ngForOf
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
