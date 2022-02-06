import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TechnoService {
    private technos: any[] = [
         { 
            'id': Date.now(),
            'technoName': 'Vuejs',
            'category': 'front',
            'details:': 'Techno front end pour dataviz'
        },
        { 
            'id': Date.now(),
            'technoName': 'React',
            'category': 'front',
            'details:': 'Techno front end pour dataviz'
        }
    ]
    
    constructor() { }

    createTechno(techno: any[]){
        const newTechno = { id: Date.now(), ...techno}
        
        this.technos = [...this.technos, newTechno];
        // this.technos = merge(newTechno, this.technos);
        // this.technos = techno;

        // this.technos.push(...techno);
        // this.technos = [...this.technos, ...techno];
        
        console.log(techno);
        console.log(newTechno);
        console.log(this.technos);
    }

    getTechnos() {
        return this.technos;
    }
}
