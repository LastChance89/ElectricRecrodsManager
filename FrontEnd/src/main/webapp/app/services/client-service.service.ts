
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';
import { UserRecord } from '../models/userRecord.model';

@Injectable()
export class ClientService {
	constructor(private http: HttpClient) { }

	initalLoadClient(fromData): Observable<boolean> {
		return this.http.post<boolean>('/power/data/initalize', fromData);
	}

	getClients(searchOption, searchCritera, inputValue): Observable<Array<Client>> {
		let payload = { "searchOpt": searchOption, "searchCritera": searchCritera, "inputVal": inputValue };
		return this.http.post<Array<Client>>('/power/data/clientSearch', payload);
	}

	getClientRecords(accountnumber): Observable<Array<UserRecord>> {
		let payload = { "accountNumber": accountnumber };
		return this.http.post<Array<UserRecord>>('/power/data/getRecords', payload);
	}

	getAllClients(): Observable<Array<Client>> {
		return this.http.post<Array<Client>>('/power/data/getAllClients', '');
	}

}
