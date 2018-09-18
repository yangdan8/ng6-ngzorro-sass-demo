import { Component, OnInit } from '@angular/core';
import { HeroService } from '@services/hero.service';
import { Hero } from '@entities/Hero';
import { ActivatedRoute } from '@angular/router';
import { AjaxResult } from '@entities/AjaxResult';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  id: string;
  name: string;
  age: string;

  heroes: Hero[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.age = this.route.snapshot.paramMap.get('age');
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((json: AjaxResult<Hero>) => {
      this.heroes = json.data;
    });
  }
}
