import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight-reyhan/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight-reyhan/better-highlight.directive';
import { UnlessDirective } from './unless-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
],
  imports: [
    BrowserModule,
    // BasicHighlightDirective
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
