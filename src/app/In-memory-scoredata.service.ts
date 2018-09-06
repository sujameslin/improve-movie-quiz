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
    const datas = [
      { id: 0, url:'src/assets/image/11.png', duty:'CEO', answer: 'Richard Lee' },
      { id: 1, url:'src/assets/image/12.jpeg', duty:'CTO', answer: 'Wang Li' },
      { id: 2, url:'src/assets/image/13.png', duty:'Mobile development Team leader', answer: 'Zhang Ho' },
      { id: 3, url:'src/assets/image/14.png', duty:'Web development Team leader', answer: 'James Lin' },
      { id: 4, url:'src/assets/image/15.jpg', duty:'Web developer', answer: 'David Lee' },
      { id: 5, url:'src/assets/image/16.jpg', duty:'Web developer', answer: 'John Smith' },
      { id: 6, url:'src/assets/image/17.jpeg', duty:'Designer', answer: 'Kristyna Vondrouhova' },
      { id: 7, url:'src/assets/image/18.png', duty:'Mobile developer', answer: 'Greg Bauer' },
      { id: 8, url:'src/assets/image/19.jpeg', duty:'Mobile developer', answer: 'Rory Fryer' },
      { id: 9, url:'src/assets/image/20.jpeg', duty:'Database developer', answer: 'Tornado' }
    ];
    return {scoredatas, datas};
  }
}
