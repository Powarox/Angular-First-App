import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test', component: TestComponent },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class AppRoutingModule { }
