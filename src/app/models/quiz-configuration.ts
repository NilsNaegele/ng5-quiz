export class QuizConfiguration {
  allowBack: boolean;
  allowReview: boolean;
  autoMove: boolean;
  duration: number;
  pageSize: number;
  requiredAll: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showPager: boolean;

  constructor(data: any) {
    data = data || {};
    this.allowBack = data.allowBack;
    this.allowReview = data.allowReview;
    this.autoMove = data.autoMove;
    this.duration = data.duration;
    this.pageSize = data.pageSize;
    this.requiredAll = data.requiredAll;
    this.shuffleQuestions = data.shuffleQuestions;
    this.shuffleOptions = data.shuffleOptions;
    this.showPager = data.showPager;

  }


}
