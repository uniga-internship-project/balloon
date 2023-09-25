import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditPlanModalComponent } from '../../components/edit-plan-modal/edit-plan-modal.component';
import { CreatePlanModalComponent } from '../../components/create-plan-modal/create-plan-modal.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  private modalService = inject(NgbModal);

  handleNewPlanClick() {
    this.modalService.open(CreatePlanModalComponent);
  }

  handleEditPlanClick() {
    this.modalService.open(EditPlanModalComponent);
  }

  handleDeletePlanClick() {
    if (confirm('Are you sure you want to delete this plan?')) {
    }
  }
}
