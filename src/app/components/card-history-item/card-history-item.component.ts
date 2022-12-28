import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-card-history-item',
  templateUrl: './card-history-item.component.html',
  styleUrls: ['./card-history-item.component.scss'],
})
export class CardHistoryItemComponent {
  @Input() item: any;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

}
