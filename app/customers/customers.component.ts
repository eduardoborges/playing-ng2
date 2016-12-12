import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from '../customer/customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];
    
    constructor(private _customerService: CustomerService) {
        this._customerService = _customerService;
    }

    ngOnInit() {

        // Rx Observable 
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            // it worked
            (customers) => this.customers = customers,
            // error
            (err) => { console.log(err); }
        );
        
        // this._customerService.getCustomers()
        // .then((customers)=> this.customers = customers )
        // .catch((err) => {
        //     console.log(err);
        // });

        // Promisse<any[]>
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        // });

        // Rx Observable
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        //     // now we eat it, but only if the
        //     // message has been communicated to the user
        // });
    }
}