import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TechnoService {
    private technos = {};
    
    constructor() { }

    createTechno(techno: []){
        const newTechno = { id: Date.now(), ...techno}
        
        this.technos = {newTechno, ...this.technos};
        // this.technos = techno;

        // this.technos.push(...techno);
        // this.technos = [...this.technos, ...techno];
        
        // console.log(techno);
        // console.log(newTechno);
        console.log(this.technos);
    }
}
