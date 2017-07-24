import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  getHerores(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(HEROES), 500);
    });
  }
}
