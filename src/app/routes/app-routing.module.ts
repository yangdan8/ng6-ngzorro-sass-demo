import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  UrlSegment,
  UrlSegmentGroup,
  Route,
  UrlMatchResult
} from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    matcher: (
      segments: UrlSegment[],
      group: UrlSegmentGroup,
      route: Route
    ): UrlMatchResult => {
      const url = 'heroes/:id/:name/:age';
      const parts = url.split('/');
      const posParams = {};
      for (let index = 0; index < parts.length; index++) {
        const part = parts[index];
        const segment = segments[index];
        const isParameter = part.startsWith(':');
        if (isParameter) {
          const key = part.substring(1);
          posParams[key] = segment || new UrlSegment('', {});
        } else if (part !== segment.path) {
          return null;
        }
      }
      return <UrlMatchResult>{
        consumed: segments.slice(0, parts.length),
        posParams: posParams
      };
    },
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
