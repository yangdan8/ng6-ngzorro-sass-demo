import { Injectable } from '@angular/core';
import { Hero } from '@entities/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getHeroes(): Hero[] {
    return [];
  }
}
