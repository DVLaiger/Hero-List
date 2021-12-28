import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HeroDetailService } from '../hero-detail.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService], 
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  @Input () id: number;
  constructor(private HeroDetailComponent: HeroDetailService) { }

  ngOnInit() {
    this.hero = this.HeroDetailComponent.getHero(this.id)
  }

}