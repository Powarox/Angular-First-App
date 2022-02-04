import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TechnoService {
    constructor() { }

    private technos = [];

    createTechno(techno: []){
        this.technos = techno;       

        // this.technos.push(techno);

        console.log(this.technos);
        console.log(techno);
    }
}
