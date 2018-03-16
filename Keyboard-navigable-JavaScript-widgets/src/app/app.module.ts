import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GroupingControlsComponent } from './grouping-controls/grouping-controls.component';
import { UsingTabIndexComponent } from './using-tab-index/using-tab-index.component';
import { TabsForWidgetComponent } from './tabs-for-widget/tabs-for-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupingControlsComponent,
    UsingTabIndexComponent,
    TabsForWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
