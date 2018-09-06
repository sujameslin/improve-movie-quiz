import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const datas = [
      { id: 0, url:'src/assets/image/11.png', duty:'CEO', answer: 'Richard Lee' },
      { id: 1, url:'src/assets/image/12.jpeg', duty:'CTO', answer: 'Wang Li' },
      { id: 2, url:'src/assets/image/13.png', duty:'Mobile development Team leader', answer: 'Zhang Ho' },
      { id: 3, url:'src/assets/image/14.png', duty:'Web development Team leader', answer: 'James Lin' },
      { id: 4, url:'src/assets/image/15.png', duty:'Web developer', answer: 'David Lee' },
      { id: 5, url:'src/assets/image/16.png', duty:'Web developer', answer: 'John Smith' },
      { id: 5, url:'src/assets/image/17.png', duty:'Designer', answer: 'Kristyna Vondrouhova' },
      { id: 6, url:'src/assets/image/18.png', duty:'Mobile developer', answer: 'Greg Bauer' },
      { id: 7, url:'src/assets/image/19.png', duty:'Mobile developer', answer: 'Rory Fryer' },
      { id: 8, url:'src/assets/image/20.png', duty:'Database developer', answer: 'Tornado' }
    ];
    return {datas};
  }
}
