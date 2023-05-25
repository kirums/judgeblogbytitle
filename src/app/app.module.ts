import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { QuoteComponent } from './header/quote/quote.component';
import { BlogSectionComponent } from './blog-section/blog-section/blog-section.component';
import { BlogListComponent } from './blog-section/blog-list/blog-list.component';
import { BlogPreviewComponent } from './blog-section/blog-preview/blog-preview.component';
import { BlogSearchComponent } from './blog-section/blog-search/blog-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    QuoteComponent,
    BlogSectionComponent,
    BlogListComponent,
    BlogPreviewComponent,
    BlogSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
