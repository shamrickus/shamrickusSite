import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MaterialModule} from "./app.material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FlexLayoutModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
