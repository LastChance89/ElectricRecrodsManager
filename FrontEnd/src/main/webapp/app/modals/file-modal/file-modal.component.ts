import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../../services/client-service.service';
import { ModalService } from '../../services/modal-service.service';

@Component({
  selector: 'app-file-modal',
  templateUrl: './file-modal.component.html',
  styleUrls: ['./file-modal.component.css']
})
export class FileModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private clientService: ClientService,  private modalService : ModalService) { }

  ngOnInit() {
  }

  
  selectedFiles : File[] = [];
  isLoading = true;

  //Currently we only can add 1, however we may add more later for bulk upload
  updateFile(event){
    let files = event.target.files;
    for(let i = 0; i< files.length; i++){
      this.selectedFiles.push(files[i]);
      
    }
  }

  loadUsers(){

    this.isLoading = false;

    const fromData = new FormData()
    this.selectedFiles.forEach(element => {
      fromData.append("files", element,element.name);
    });
    this.clientService.initalLoadClient(fromData).subscribe(result => {
      this.isLoading = false;
      this.modalService.openMessageModal(false, result['message']);
      this.close();
    },
    error => {
      this.modalService.openMessageModal(true, error.error.message);
      this.close();
    }
    
    )
  }

  close(){
    this.activeModal.close();
  }
}
