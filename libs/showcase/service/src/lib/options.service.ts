import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OptionsService {

    constructor(private httpClient: HttpClient) { }

    getData() {
        return this.httpClient.get('assets/mockOptions.json');
    }
    
}