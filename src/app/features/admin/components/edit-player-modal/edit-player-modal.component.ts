import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-player-modal',
  templateUrl: './edit-player-modal.component.html',
  styleUrls: ['./edit-player-modal.component.scss'],
})
export class EditPlayerModalComponent {
  private activeModal = inject(NgbActiveModal);

  selectedPosition = null;
  selectedNationality = null;
  selectedCurrentTeams = null;

  positions = [
    { id: 1, name: 'หน้า' },
    { id: 2, name: 'กลาง' },
    { id: 3, name: 'หลัง' },
    { id: 4, name: 'ประตู' },
  ];

  nationalities = [
    { id: 1, name: 'Thailand' },
    { id: 2, name: 'England' },
    { id: 3, name: 'France' },
    { id: 4, name: 'Spain' },
  ];

  teams = [
    { id: 1, name: 'Manchester United' },
    { id: 2, name: 'Liverpool' },
    { id: 3, name: 'Chelsea' },
    { id: 4, name: 'Arsenal' },
  ];

  handleConfirmClick() {
    this.close();
  }

  close() {
    this.activeModal.close();
  }
}
