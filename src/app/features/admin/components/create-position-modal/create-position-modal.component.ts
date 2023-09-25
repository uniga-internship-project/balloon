import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-position-modal',
  templateUrl: './create-position-modal.component.html',
  styleUrls: ['./create-position-modal.component.scss'],
})
export class CreatePositionModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
