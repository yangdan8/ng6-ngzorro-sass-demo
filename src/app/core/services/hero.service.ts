import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from '@entities/Hero';
import { AjaxResult } from '@entities/AjaxResult';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private http: HttpClient) { }
    getHeroes(): Observable<AjaxResult<Hero>> {
        const url = 'https://www.baidu.com/s';
        return this.http.get<AjaxResult<Hero>>(url);
    }
}
