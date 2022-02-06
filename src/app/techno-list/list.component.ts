import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
    selector: 'app-techno-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    allTechnos: any[] = [];

    constructor(private ts: TechnoService) { }

    ngOnInit(): void { 
        this.getTechnos();
    }

    getTechnos() {
        this.allTechnos = this.ts.getTechnos();
    }

}
