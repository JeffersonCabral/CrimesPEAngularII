import { Component, Input, OnInit } from '@angular/core';
import{ Crime } from'./crime';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrimeService } from './_services/crime.service';
import 'rxjs/add/operator/switchMap';

@Component(  {
  moduleId: module.id,
  selector: 'my-crime-detail',
  templateUrl: 'crime-detail.component.html'

})

export class CrimeDetailComponent implements OnInit{
	@Input()
  crime: Crime;

  constructor(

    private crimeService: CrimeService,
    private route: ActivatedRoute,
    private location: Location

    ){}

  ngOnInit(): void{

    this.route.params
    .switchMap((params: Params) => this.crimeService.getCrime(+params['id']))
    .subscribe(hero => this.crime = hero);
  }

  goBack(): void{
    this.location.back();
  }
}
