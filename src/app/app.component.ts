import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBJATWSx7kdUaW4BVjqxgFVvWp1a4jdRa8',
      authDomain: 'udemy-recipe-book-5f8ce.firebaseapp.com'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
