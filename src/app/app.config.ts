import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {getAuth, provideAuth} from "@angular/fire/auth";

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "********************************",
  authDomain: "*****************************",
  projectId: "*****************************",
  storageBucket: "******************************",
  messagingSenderId: "*****************",
  appId: "**************************"
};




export const appConfig: ApplicationConfig = {
  providers: [
//    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    provideRouter(routes),

    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
