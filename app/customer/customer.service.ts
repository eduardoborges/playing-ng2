import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx'; // get everting

const URL_CUSTOMER = "/app/customers.json";

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers(){
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    getCustomers_RxObservable(){
        return this._http.get(URL_CUSTOMER)
        .map((response: Response) => response.json())
        .catch(this._headlerError);
    }

    _headlerError(err: any){
        console.log(err);
        // throw err;
        return Observable.throw(err);
    }
}