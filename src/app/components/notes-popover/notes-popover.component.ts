import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NoteData } from '../../models/grid.models';

type Placement = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

const POPOVER_W = 240;
const POPOVER_H = 200;
const GAP = 8;
const VIEWPORT_MARGIN = 8;

@Component({
  selector: 'app-notes-popover',
  standalone: true,
  imports: [],
  templateUrl: './notes-popover.component.html',
  styleUrl: './notes-popover.component.scss'
})
export class NotesPopoverComponent implements OnChanges {
  @Input() visible: boolean = false;
  @Input() note: NoteData | null = null;
  /** The element the popover is anchored to. Pass via template ref: [triggerEl]="myBtn" */
  @Input() triggerEl: HTMLElement | null = null;

  /** Emitted when the cursor enters the popover card — use to cancel a hide timer. */
  @Output() popoverEnter = new EventEmitter<void>();
  /** Emitted when the cursor leaves the popover card — use to restart the hide timer. */
  @Output() popoverLeave = new EventEmitter<void>();

  top = 0;
  left = 0;
  placement: Placement = 'bottom-right';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.visible && (changes['visible'] || changes['triggerEl'])) {
      this.computePosition();
    }
  }

  private computePosition(): void {
    if (!this.triggerEl) return;

    const rect = this.triggerEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const spaceBelow = vh - rect.bottom;
    const spaceAbove = rect.top;
    const spaceRight = vw - rect.right;
    const spaceLeft = rect.left;

    const placeBelow = spaceBelow >= POPOVER_H + GAP || spaceBelow >= spaceAbove;
    const placeRight = spaceRight >= POPOVER_W || spaceRight >= spaceLeft;

    let top: number;
    let left: number;

    if (placeBelow) {
      top = rect.bottom + GAP;
      this.placement = placeRight ? 'bottom-right' : 'bottom-left';
    } else {
      top = rect.top - POPOVER_H - GAP;
      this.placement = placeRight ? 'top-right' : 'top-left';
    }

    if (placeRight) {
      left = rect.left;
    } else {
      left = rect.right - POPOVER_W;
    }

    // Clamp to viewport
    this.top = Math.max(VIEWPORT_MARGIN, Math.min(top, vh - POPOVER_H - VIEWPORT_MARGIN));
    this.left = Math.max(VIEWPORT_MARGIN, Math.min(left, vw - POPOVER_W - VIEWPORT_MARGIN));
  }
}