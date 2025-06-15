import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IPortfolio } from './model/portfolio';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  // private jsonUrl = 'assets/data/portfolio_data_with_ids.json';
  // constructor() {}
  private jsonUrl = 'assets/data/portfolio_data_with_ids.json';
  // getProjects(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonUrl);
  // }
  private portfolioCollection: AngularFirestoreCollection<IPortfolio>;
    portfolios$: Observable<IPortfolio[]>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.portfolioCollection = db.collection('portfolio');
        this.portfolios$ = this.portfolioCollection.valueChanges({ idField: 'id' });

  }



  // getProjects(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonUrl);
  // }
}
