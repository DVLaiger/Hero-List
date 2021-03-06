import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { heroSquadFactory } from '../hero-squads';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css'],  
})
export class FavoriteHeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}