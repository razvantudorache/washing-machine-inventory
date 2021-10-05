import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from "../../app.constants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WashingMachinesListService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    const url = `${APP_CONSTANTS.BASE_URL}/washing-machines-list`;

    return this.http.get(url);
  }

  public deleteWashingMachine(id: string): Observable<any> {
    const url = `${APP_CONSTANTS.BASE_URL}/washing-machines-list/${id}`;

    return this.http.delete(url);
  }
}
