import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { APP_CONFIG, AppConfig } from './config/app.config';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologySearchComponent } from './technology-search/technology-search.component';
import { ImagesComponent } from './images/images.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { AlphaComponent } from './alpha/alpha.component';
import { HeroTopComponent } from './heroes/hero-top/hero-top.component';

import { QuizService } from './quiz.service';
import { TechnologyService } from './technology.service';
import { MessageService } from './message.service';
import { ImageService } from './image.service';
import { SidenavService } from './sidenav.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { UtilsService } from './shared/services/utils.service';
import { HeroesService } from './heroes/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    NavBarComponent,
    SideNavComponent,
    FooterComponent,
    TechnologiesComponent,
    TechnologyDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TechnologySearchComponent,
    ImagesComponent,
    AddMessageComponent,
    AlphaComponent,
    HeroTopComponent
  ],
  entryComponents: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(
                                   InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [QuizService, TechnologyService, MessageService,
              ImageService, SidenavService, UtilsService, ProgressBarService, HeroesService,
             { provide: APP_CONFIG, useValue: AppConfig }
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
