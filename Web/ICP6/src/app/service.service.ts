import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  

  getrecipes(client_id,client_secret,recipevalue): Observable<any> {
    return this.httpClient
      .get<any>('https://api.edamam.com/api/recipes/v2'+'?&type=public&app_id='+client_id+"&app_key="+client_secret+"&q="+recipevalue)
      .pipe(
        map(
          response =>
            response
        )
      );
  }
  getrestaurants(client_id,client_secret,recipevalue,placevalue): Observable<any> {
    let headers = new HttpHeaders()
      .set("Authorization", "fsq3rrCognvaRF7OppJlfX7CmQDsYwnil8QHH7nuhmQzpCI=");
    const httpOptions = {
      headers: headers
    };
    return this.httpClient
      .get<any>('https://api.foursquare.com/v3/places/search'+'?client_id='+client_id+"&client_secret="+client_secret+"&query="+recipevalue+"&near="+placevalue+"&v=20220220",httpOptions)
      .pipe(
        map(
          response =>
            response)
      );
  }
}
