import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit{

    @Input() customer: { id: string, name: string };
    foo: string;

    constructor(){}

    ngOnInit(){}
}