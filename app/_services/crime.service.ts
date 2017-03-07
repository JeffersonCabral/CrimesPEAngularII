import { Injectable } from '@angular/core';
import {Crime} from '../crime';
import { CRIMES } from '../lista.crime';

@Injectable()
export class CrimeService{

	getCrimes() : Promise<Crime[]>{
		return Promise.resolve(CRIMES);
	}

	getCrime(id: number) : Promise<Crime>{
		return this.getCrimes().then(crimes => crimes.find(crime => crime.id === id));
	}
}