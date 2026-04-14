import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompareStudent, SkillProfile, SkillProfileEntry } from '../../models/compare.models';

type SortDirection = 'none' | 'asc' | 'desc';

@Component({
  selector: 'app-compare-grid',
  standalone: true,
  imports: [],
  templateUrl: './compare-grid.component.html',
  styleUrl: './compare-grid.component.scss'
})
export class CompareGridComponent implements OnInit, OnChanges {
  @Input() students: CompareStudent[] = [];
  @Input() skillProfiles: SkillProfile[] = [];

  sortDirection: SortDirection = 'none';
  displayProfiles: SkillProfile[] = [];

  private entriesMap: { [profileId: string]: { [studentId: string]: SkillProfileEntry } } = {};

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