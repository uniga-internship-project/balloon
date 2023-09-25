import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-skill-modal',
  templateUrl: './edit-skill-modal.component.html',
  styleUrls: ['./edit-skill-modal.component.scss'],
})
export class EditSkillModalComponent {
  private activeModal = inject(NgbActiveModal);

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
