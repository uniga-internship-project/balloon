import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-plan-modal',
  templateUrl: './create-plan-modal.component.html',
  styleUrls: ['./create-plan-modal.component.scss'],
})
export class CreatePlanModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
