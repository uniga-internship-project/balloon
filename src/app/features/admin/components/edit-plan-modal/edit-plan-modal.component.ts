import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-plan-modal',
  templateUrl: './edit-plan-modal.component.html',
  styleUrls: ['./edit-plan-modal.component.scss'],
})
export class EditPlanModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
