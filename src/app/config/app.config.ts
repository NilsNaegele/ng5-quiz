import { InjectionToken } from '@angular/core';

import { IAppConfig } from './iappconfig';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://ng5-quiz.firebaseio.com/heroes'
  },
  votesLimit: 10,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/NilsNaegele/ng5-quiz'
};
