import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-techno-card',
    templateUrl: './techno-card.component.html',
    styleUrls: ['./techno-card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() tech: {} = {};
        
    constructor() { }

    ngOnInit(): void {
        console.log(this.tech);
    }

}
