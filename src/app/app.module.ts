import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './techno-add/techno-add.component';
import { ListComponent } from './techno-list/techno-list.component';
import { CardComponent } from './techno-card/techno-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TestComponent,
        ListComponent,
        CardComponent
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
