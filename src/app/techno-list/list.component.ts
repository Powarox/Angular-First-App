import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    allTechnos: {} = {};

    constructor(private ts: TechnoService) { }

    ngOnInit(): void { 
        this.getTechnos();
    }

    getTechnos() {
        this.allTechnos = this.ts.getTechnos();
    }

}
