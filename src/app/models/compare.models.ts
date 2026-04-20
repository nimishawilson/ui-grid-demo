export interface CompareStudent {
  id: string;
  name: string;
}

export interface SkillProfileEntry {
  studentId: string;
  basicValue: string;           // text label shown in values row under "Basic"
  advancedValue: number | null; // score shown under "Advanced"
  expertValue: number | null;   // score shown under "Expert"
}

export interface SkillProfile {
  id: string;
  name: string;
  entries: SkillProfileEntry[];
}

export interface CompareData {
  students: CompareStudent[];
  skillProfiles: SkillProfile[];
}