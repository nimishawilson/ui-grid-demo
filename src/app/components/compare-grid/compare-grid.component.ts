import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CompareStudent, SkillProfile, SkillProfileEntry } from '../../models/compare.models';
import { NoteData } from '../../models/grid.models';
import { NotesPopoverComponent } from '../notes-popover/notes-popover.component';

type SortDirection = 'none' | 'asc' | 'desc';

@Component({
  selector: 'app-compare-grid',
  standalone: true,
  imports: [NotesPopoverComponent],
  templateUrl: './compare-grid.component.html',
  styleUrl: './compare-grid.component.scss'
})
export class CompareGridComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('headerArea') private headerAreaRef!: ElementRef<HTMLDivElement>;
  @ViewChild('bodyScroll') private bodyScrollRef!: ElementRef<HTMLDivElement>;
  @Input() students: CompareStudent[] = [];
  @Input() skillProfiles: SkillProfile[] = [];

  sortDirection: SortDirection = 'none';
  displayProfiles: SkillProfile[] = [];

  private entriesMap: { [profileId: string]: { [studentId: string]: SkillProfileEntry } } = {};

  // ── Notes popover hover state ───────────────────────────────────────────────
  noteVisible = false;
  activeNote: NoteData | null = null;
  activeTriggerEl: HTMLElement | null = null;
  private hideTimer?: ReturnType<typeof setTimeout>;

  private resizeObserver?: ResizeObserver;

  private readonly syncScroll = (): void => {
    this.headerAreaRef.nativeElement.scrollLeft = this.bodyScrollRef.nativeElement.scrollLeft;
  };

  private readonly syncScrollbarGutter = (): void => {
    const body = this.bodyScrollRef.nativeElement;
    const gutterWidth = body.offsetWidth - body.clientWidth;
    this.headerAreaRef.nativeElement.style.paddingRight = `${gutterWidth}px`;
  };

  ngAfterViewInit(): void {
    this.bodyScrollRef.nativeElement.addEventListener('scroll', this.syncScroll);
    this.resizeObserver = new ResizeObserver(this.syncScrollbarGutter);
    this.resizeObserver.observe(this.bodyScrollRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.bodyScrollRef.nativeElement.removeEventListener('scroll', this.syncScroll);
    this.resizeObserver?.disconnect();
    clearTimeout(this.hideTimer);
  }

  onCellEnter(event: MouseEvent, profileId: string, studentId: string): void {
    const entry = this.getEntry(profileId, studentId);
    if (!entry.note) return;
    clearTimeout(this.hideTimer);
    this.activeTriggerEl = event.currentTarget as HTMLElement;
    this.activeNote = entry.note;
    this.noteVisible = true;
  }

  onCellLeave(): void {
    this.hideTimer = setTimeout(() => { this.noteVisible = false; }, 200);
  }

  onPopoverEnter(): void {
    clearTimeout(this.hideTimer);
  }

  onPopoverLeave(): void {
    this.hideTimer = setTimeout(() => { this.noteVisible = false; }, 200);
  }

  get gridMaxWidth(): string {
    const tableWidth = 180 + this.students.length * 3 * 80;
    return `${tableWidth}px`;
  }

  get sortIcon(): string {
    if (this.sortDirection === 'asc') return '↑';
    if (this.sortDirection === 'desc') return '↓';
    return '⇅';
  }

  get sortTitle(): string {
    if (this.sortDirection === 'none') return 'Sort ascending';
    if (this.sortDirection === 'asc') return 'Sort descending';
    return 'Clear sort';
  }

  ngOnInit(): void {
    this.buildEntriesMap();
    this.updateDisplayProfiles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skillProfiles'] || changes['students']) {
      this.buildEntriesMap();
      this.updateDisplayProfiles();
    }
  }

  toggleSort(): void {
    if (this.sortDirection === 'none') this.sortDirection = 'asc';
    else if (this.sortDirection === 'asc') this.sortDirection = 'desc';
    else this.sortDirection = 'none';
    this.updateDisplayProfiles();
  }

  setProfileTooltip(event: MouseEvent, name: string): void {
    const el = event.target as HTMLElement;
    el.title = el.scrollHeight > el.clientHeight ? name : '';
  }

  changeClass(value: string): string {
    if (value.startsWith('+')) return 'change-pos';
    if (value.startsWith('-')) return 'change-neg';
    return 'change-neu';
  }

  getEntry(profileId: string, studentId: string): SkillProfileEntry {
    const profileMap = this.entriesMap[profileId];
    if (profileMap) {
      const entry = profileMap[studentId];
      if (entry) return entry;
    }
    return { studentId, basicValue: '—', advancedValue: null, expertValue: null };
  }

  private buildEntriesMap(): void {
    this.entriesMap = {};
    for (const profile of this.skillProfiles) {
      this.entriesMap[profile.id] = {};
      for (const entry of profile.entries) {
        this.entriesMap[profile.id][entry.studentId] = entry;
      }
    }
  }

  private updateDisplayProfiles(): void {
    const profiles = [...this.skillProfiles];
    if (this.sortDirection === 'asc') {
      profiles.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortDirection === 'desc') {
      profiles.sort((a, b) => b.name.localeCompare(a.name));
    }
    this.displayProfiles = profiles;
  }
}