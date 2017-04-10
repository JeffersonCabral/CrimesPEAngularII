import {Component, OnInit} from '@angular/core';
import {Crime} from './crime';
import {Cidade} from './cidade';
import {CIDADES} from './cidades';

@Component(  {
  moduleId: module.id,
  selector: 'inserir-crime',
  templateUrl: 'inserir-crime.component.html'

})

export class FormInserirCrimeComponent{
		
	cidades: Cidade[];
	sucesso: boolean = false;
	crime: Crime;
	
	constructor(){

		this.cidades = CIDADES;
		this.crime = new Crime();
	}

	enviar(): void{
		this.sucesso = true;
	}

	debug(): string{
		return JSON.stringify(this.crime);
	} 
}