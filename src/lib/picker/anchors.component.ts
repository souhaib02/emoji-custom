import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { EmojiCategory } from 'ngx-emoji-custom/ngx-emoji';

@Component({
  selector: 'emoji-mart-anchors',
  template: `
  <div class="emoji-mart-anchors">
    <ng-template ngFor let-category [ngForOf]="categories" let-idx="index" [ngForTrackBy]="trackByFn">
      <span
        *ngIf="category.anchor !== false"
        [attr.title]="i18n.categories[category.id]"
        (click)="this.handleClick($event, idx)"
        class="emoji-mart-anchor"
        [class.emoji-mart-anchor-selected]="category.name === selected"
        [style.color]="category.name === selected ? color : null"
      >
        <div *ngIf="category.icon">
          <img [src]="category.icon" style="width: 24px; height: 24px;">
        </div>
        <div *ngIf="!category.icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path [attr.d]="icons[category.id] ?? icons['custom']" />
          </svg>
        </div>
        <span class="emoji-mart-anchor-bar" [style.background-color]="color"></span>
      </span>
    </ng-template>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class AnchorsComponent {
  @Input() categories: EmojiCategory[] = [];
  @Input() color?: string;
  @Input() selected?: string;
  @Input() i18n: any;
  @Input() icons: { [key: string]: string } = {};
  @Output() anchorClick = new EventEmitter<{ category: EmojiCategory, index: number }>();

  trackByFn(idx: number, cat: EmojiCategory) {
    return cat.id;
  }
  handleClick($event: Event, index: number) {
    this.anchorClick.emit({
      category: this.categories[index],
      index,
    });
  }
}
