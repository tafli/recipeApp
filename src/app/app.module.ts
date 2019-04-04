import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoppingListModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HttpModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
