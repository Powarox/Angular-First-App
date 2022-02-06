import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TestComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
})

export class AppModule { }
