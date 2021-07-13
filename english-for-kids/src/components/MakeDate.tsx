import { images } from '../shared/categoryImages';

export const newCard = () => {
    let trained: number = 0;
    let correct: number = 0;
    let incorrect: number = 0;
    let percentage: string = '0';

    images.map(img => img.images.map(singleImg => {
        const object = JSON.parse(localStorage.getItem(singleImg)!);
        trained = (localStorage.getItem(singleImg)) ? +object.trained : 0;
        correct = (localStorage.getItem(singleImg)) ? +object.correct : 0;
        incorrect = (localStorage.getItem(singleImg)) ? +object.incorrect : 0;
        percentage = (correct === 0 && incorrect === 0) ? 0 + '%' : ((100 / (correct + incorrect)) * correct).toFixed(2) + '%';
    }));
    return {
      category: images.map(img => img.category),
      word: images.map(img => img.images.map(i => i)),
      trained: trained,
      correct: correct,
      percentage: percentage,
    }
  }