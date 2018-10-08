import * as angular from 'angular';
import { AppComponent } from './app.component';

export const AppModule = angular .module('app', ['ngCookies'])

AppModule.component('appRoot', AppComponent)
