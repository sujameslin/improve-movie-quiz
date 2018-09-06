import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryScoreDataService implements InMemoryDbService {
  createDb() {
    const scoredatas = [
      { id: 1, name:'John', score:41},
      { id: 2, name:'Walter', score:34 },
      { id: 3, name:'Richard', score:29 },
      { id: 4, name:'Greg', score:26 },
      { id: 5, name:'keeper', score:21 },
      { id: 6, name:'crazy-drama', score:17 },
      { id: 7, name:'freedom', score:12 },
      { id: 8, name:'Ask me', score:4 }
    ];
    return {scoredatas};
  }
}
