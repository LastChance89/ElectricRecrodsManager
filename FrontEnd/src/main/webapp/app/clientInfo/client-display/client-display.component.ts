import { Component,OnInit,Input ,EventEmitter,Output, OnChanges, SimpleChanges } from '@angular/core';

import {ClientService} from '../../services/ClientService.service'
import { Observable } from 'rxjs'

import {Client} from '../../models/client.model'
import {GridService} from '../../services/gridService.service'
import { ColDef } from 'ag-grid-community';
import {GridRenderer} from '../../grid/custom-grid-renderer.component'
import { ModalService } from '../../services/modal-service.service';


@Component({
  selector: 'client-display',
  templateUrl: './client-display.component.html',
  styleUrls: ['./client-display.component.css'],
  providers:[ClientService]
})



export class ClientDisplay  implements OnInit {
	constructor(private clientService: ClientService, private gridService: GridService, private modalService : ModalService) { }
	
	gridColumns : ColDef[];
	recordList: any[];

	@Input() client: Client; 

	@Input()_clientList

	@Output() records = new EventEmitter();


	ngOnInit(){
		this.gridService.getGridMetaData(2).subscribe(gridMeta => {
			this.gridColumns = gridMeta;
		},
		error =>{
		  this.modalService.openMessageModal(true, error.error.message);
		});
		
		this.clientService.getAllClients().subscribe(clientList => {
			this._clientList = clientList
		},
		error =>{
		  this.modalService.openMessageModal(true, error.error.message);
		});
	}

	getUserRecords(e){
		e.preventDefault();
		this.clientService.getClientRecords(this.client.accountNumber).subscribe(recordList=>{
			this.records.emit(recordList);
		},
		error =>{
		  this.modalService.openMessageModal(true, error.error.message);
		})
	}

}