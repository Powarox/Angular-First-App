import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './techno-add/techno-add.component';
import { ListComponent } from './techno-list/techno-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'list', component: ListComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
