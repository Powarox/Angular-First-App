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
    }

    getTechnos() {
        return this.technos;
    }
}
