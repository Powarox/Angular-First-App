import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }
}
