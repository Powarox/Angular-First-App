import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TechnoService } from '../services/techno.service';

@Component({
    selector: 'app-techno-add',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    constructor(private ts: TechnoService) { }

    ngOnInit(): void {
    
    }

    onSubmit(form: NgForm) {
        this.ts.createTechno(form.value)
    }
}
