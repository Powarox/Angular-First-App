import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list/list.component';

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
