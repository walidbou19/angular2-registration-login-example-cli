import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CompaniesService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getCompanies(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getCompany(id){
    return this.http.get(this.getCompanyUrl(id))
      .map(res => res.json());
  }

  addCompany(company){
    return this.http.post(this.url, JSON.stringify(company))
      .map(res => res.json());
  }

  updateCompany(company){
    return this.http.put(this.getCompanyUrl(company.id), JSON.stringify(company))
      .map(res => res.json());
  }

  deleteCompany(id){
    return this.http.delete(this.getCompanyUrl(id))
      .map(res => res.json());
  }

  private getCompanyUrl(id){
    return this.url + "/" + id;
  }
}
