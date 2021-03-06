import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
