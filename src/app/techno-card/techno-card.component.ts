import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-techno-card',
    templateUrl: './techno-card.component.html',
    styleUrls: ['./techno-card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() tech: any[] = [];
    @Output() deleteTech = new EventEmitter();
        
    constructor() { }

    ngOnInit(): void {
        console.log(this.tech);
    }

    delete(tech: any[]) {
        this.deleteTech.emit(tech);
    }
}
