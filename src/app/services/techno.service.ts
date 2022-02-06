import { Injectable } from '@angular/core';
import { Technology } from '../models/technology';

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

    getTechnos() {
        return this.technos;
    }

    createTechno(techno: any[]){
        const newTechno = { id: Date.now(), ...techno};
        this.technos = [...this.technos, newTechno];
    }

    deleteTechno(techno: any[]) {
        // this.technos = this.technos.filter(t => t.id !== techno.id);
    }
}
