import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class recordService{

	constructor(private http: HttpClient,  private accNum: Number) { }
	
	getUserRecords(accNum: Number){
	let payload = {"accNum",accNum}
		return this.http.post('http://localhost:8080/power/data/recordsRetreval',payload);
	}




}