import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { APP_CONSTANTS } from "../../app.constants";
import { HttpClient } from "@angular/common/http";
import { WashingMachineInterface } from './washing-machine.interface';

@Injectable({
    providedIn: 'root'
})
export class WashingMachineDetailsService {

    constructor(private http: HttpClient) {
    }

    public getDetails(id: string): Observable<any> {
        const url = `${APP_CONSTANTS.BASE_URL}/washing-machines-list/${id}`;

        return this.http.get(url)
    }


    public saveDetails(id: string, data: WashingMachineInterface): Observable<any> {
        const url = `${APP_CONSTANTS.BASE_URL}/washing-machines-list/${id}`;

        return this.http.put(url, data);
    }

    public getLocationOptions(): Observable<any> {
        const url = `${APP_CONSTANTS.BASE_URL}/location-options`;

        return this.http.get(url);
    }

    public getStatusOptions(): Observable<any> {
        const url = `${APP_CONSTANTS.BASE_URL}/status-options`;

        return this.http.get(url);
    }
}
