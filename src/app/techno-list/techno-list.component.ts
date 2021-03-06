import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
    selector: 'app-techno-list',
    templateUrl: './techno-list.component.html',
    styleUrls: ['./techno-list.component.scss']
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

    deleteTechno(techno: any[]) {
        this.ts.deleteTechno(techno);
        this.allTechnos = this.ts.getTechnos();
    }
}
