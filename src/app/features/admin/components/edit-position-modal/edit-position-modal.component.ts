import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-position-modal',
  templateUrl: './edit-position-modal.component.html',
  styleUrls: ['./edit-position-modal.component.scss'],
})
export class EditPositionModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
