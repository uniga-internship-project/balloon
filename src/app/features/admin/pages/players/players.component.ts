import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CreatePlayerModalComponent } from '../../components/create-player-modal/create-player-modal.component';
import { EditPlayerModalComponent } from '../../components/edit-player-modal/edit-player-modal.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
  private modalService = inject(NgbModal);

  handleNewPlayerClick() {
    this.modalService.open(CreatePlayerModalComponent);
  }

  handleEditPlayerClick() {
    this.modalService.open(EditPlayerModalComponent);
  }

  handleDeletePlayerClick() {
    if (confirm('Are you sure you want to delete this player?')) {
    }
  }
}
