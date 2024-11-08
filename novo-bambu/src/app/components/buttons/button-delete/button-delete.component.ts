import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  template: `<ion-button (click)="onDelete()" fill="clear">
               <ion-icon name="trash-outline"></ion-icon>
             </ion-button>`,
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent {
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(); // Emite o evento de exclusão
  }
}