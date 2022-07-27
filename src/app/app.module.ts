import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { MainComponent } from './Layout/main/main.component';
import { MoveElementDirective } from './directive/move-element.directive';

@NgModule({
  declarations: [AppComponent, MainComponent, MoveElementDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
