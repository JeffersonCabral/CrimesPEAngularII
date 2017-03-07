import { Component, OnInit } from '@angular/core';
import { Crime } from'./crime';
import { CrimeService } from './_services/crime.service';

@Component({
  selector: 'Crimes',
  template: `
  <h2>Vítimas</h2>
  <ul class=heroes>
  	<li *ngFor = "let crime of crimes" [class.selected]="crime === selectedCrime" (click) = "onSelect(crime)">
  		<span class="badge">{{crime.id}}</span> {{crime.nome_vitima}} 
  	</li>
  </ul>
  <my-crime-detail [crime]="selectedCrime"></my-crime-detail> `,
   styles: [`
  .selected{
    background-color: #CFD8DC;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 30em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`
  ],
 
})
export class CrimesComponent implements OnInit { 
	crimes : Crime [];
 	selectedCrime: Crime;

  constructor (private CrimeService: CrimeService) {}

  getCrimes() : void {

    this.CrimeService.getCrimes().then(crimes => this.crimes = crimes);
  }

  ngOnInit() : void {

    this.getCrimes();
  }

 	onSelect(crime: Crime): void{
 		this.selectedCrime = crime;
 	}
 }
