import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-skill-modal',
  templateUrl: './create-skill-modal.component.html',
  styleUrls: ['./create-skill-modal.component.scss'],
})
export class CreateSkillModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
