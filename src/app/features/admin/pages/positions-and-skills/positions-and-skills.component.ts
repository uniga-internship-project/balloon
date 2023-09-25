import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditPositionModalComponent } from '../../components/edit-position-modal/edit-position-modal.component';
import { CreatePositionModalComponent } from '../../components/create-position-modal/create-position-modal.component';
import { CreateSkillModalComponent } from '../../components/create-skill-modal/create-skill-modal.component';
import { EditSkillModalComponent } from '../../components/edit-skill-modal/edit-skill-modal.component';

@Component({
  selector: 'app-positions-and-skills',
  templateUrl: './positions-and-skills.component.html',
  styleUrls: ['./positions-and-skills.component.scss'],
})
export class PositionsAndSkillsComponent {
  private modalService = inject(NgbModal);

  handleNewPositionClick() {
    this.modalService.open(CreatePositionModalComponent);
  }

  handleEditPositionClick() {
    this.modalService.open(EditPositionModalComponent);
  }

  handleDeletePositionClick() {
    if (confirm('Are you sure you want to delete this position?')) {
    }
  }

  handleNewSkillClick() {
    this.modalService.open(CreateSkillModalComponent);
  }

  handleEditSkillClick() {
    this.modalService.open(EditSkillModalComponent);
  }

  handleDeleteSkillClick() {
    if (confirm('Are you sure you want to delete this skill?')) {
    }
  }
}
