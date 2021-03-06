import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { JobFeedComponent }   from './job-feed.component';
import { NewsFeedBannerComponent }    from './news-feed-banner.component';
import { ProfileFeedComponent } from './profile-feed.component';
import { NewsFeedDirective }          from './news-feed.directive';
import { NewsFeedService }            from './news-feed.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [NewsFeedService],
  declarations: [ AppComponent,
                  NewsFeedBannerComponent,
                  JobFeedComponent,
                  ProfileFeedComponent,
                  NewsFeedDirective ],
  entryComponents: [ JobFeedComponent, ProfileFeedComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

