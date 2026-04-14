import { GridData } from '../models/grid.models';

export const DUMMY_GRID_DATA: GridData = {
  students: [
    {
      id: 's1',
      name: 'Alice Johnson',
      percentages: { current: 78, shortTerm: 85, midTerm: 92 }
    },
    {
      id: 's2',
      name: 'Bob Smith',
      percentages: { current: 65, shortTerm: 72, midTerm: 80 }
    },
    {
      id: 's3',
      name: 'Carol White',
      percentages: { current: 88, shortTerm: 91, midTerm: 95 }
    },
    {
      id: 's4',
      name: 'David Brown',
      percentages: { current: 55, shortTerm: 65, midTerm: 75 }
    },
    {
      id: 's5',
      name: 'Emma Davis',
      percentages: { current: 92, shortTerm: 95, midTerm: 98 }
    }
  ],
  categories: [
    {
      id: 'c1',
      name: 'Science',
      subjects: [
        {
          id: 'sub1',
          name: 'Physics',
          marks: [
            { studentId: 's1', basic: 75, advanced: 82, expert: 88 },
            { studentId: 's2', basic: 60, advanced: 70, expert: 78 },
            { studentId: 's3', basic: 85, advanced: 90, expert: 94 },
            { studentId: 's4', basic: 50, advanced: 60, expert: 70 },
            { studentId: 's5', basic: 90, advanced: 94, expert: 97 }
          ]
        },
        {
          id: 'sub2',
          name: 'Chemistry',
          marks: [
            { studentId: 's1', basic: 80, advanced: 85, expert: 90 },
            { studentId: 's2', basic: 65, advanced: 72, expert: 80 },
            { studentId: 's3', basic: 88, advanced: 92, expert: 96 },
            { studentId: 's4', basic: 55, advanced: 65, expert: 72 },
            { studentId: 's5', basic: 92, advanced: 95, expert: 98 }
          ]
        },
        {
          id: 'sub3',
          name: 'Biology',
          marks: [
            { studentId: 's1', basic: 78, advanced: 84, expert: 89 },
            { studentId: 's2', basic: 63, advanced: 71, expert: 79 },
            { studentId: 's3', basic: 87, advanced: 91, expert: 95 },
            { studentId: 's4', basic: 52, advanced: 62, expert: 71 },
            { studentId: 's5', basic: 91, advanced: 93, expert: 97 }
          ]
        },
        {
          id: 'sub9',
          name: 'Environmental Science',
          marks: [
            { studentId: 's1', basic: 72, advanced: 79, expert: 86 },
            { studentId: 's2', basic: 58, advanced: 67, expert: 75 },
            { studentId: 's3', basic: 83, advanced: 89, expert: 93 },
            { studentId: 's4', basic: 49, advanced: 59, expert: 68 },
            { studentId: 's5', basic: 88, advanced: 92, expert: 96 }
          ]
        }
      ]
    },
    {
      id: 'c2',
      name: 'Languages',
      subjects: [
        {
          id: 'sub4',
          name: 'English',
          marks: [
            { studentId: 's1', basic: 82, advanced: 87, expert: 92 },
            { studentId: 's2', basic: 70, advanced: 75, expert: 82 },
            { studentId: 's3', basic: 90, advanced: 93, expert: 96 },
            { studentId: 's4', basic: 60, advanced: 68, expert: 75 },
            { studentId: 's5', basic: 94, advanced: 96, expert: 99 }
          ]
        },
        {
          id: 'sub5',
          name: 'French',
          marks: [
            { studentId: 's1', basic: 70, advanced: 78, expert: 85 },
            { studentId: 's2', basic: 58, advanced: 66, expert: 74 },
            { studentId: 's3', basic: 82, advanced: 88, expert: 93 },
            { studentId: 's4', basic: 48, advanced: 58, expert: 68 },
            { studentId: 's5', basic: 88, advanced: 92, expert: 95 }
          ]
        },
        {
          id: 'sub10',
          name: 'Spanish',
          marks: [
            { studentId: 's1', basic: 68, advanced: 75, expert: 83 },
            { studentId: 's2', basic: 55, advanced: 63, expert: 71 },
            { studentId: 's3', basic: 80, advanced: 86, expert: 91 },
            { studentId: 's4', basic: 45, advanced: 55, expert: 65 },
            { studentId: 's5', basic: 86, advanced: 90, expert: 94 }
          ]
        },
        {
          id: 'sub11',
          name: 'German',
          marks: [
            { studentId: 's1', basic: 65, advanced: 73, expert: 81 },
            { studentId: 's2', basic: 52, advanced: 61, expert: 70 },
            { studentId: 's3', basic: 78, advanced: 84, expert: 90 },
            { studentId: 's4', basic: 43, advanced: 53, expert: 63 },
            { studentId: 's5', basic: 84, advanced: 89, expert: 93 }
          ]
        }
      ]
    },
    {
      id: 'c3',
      name: 'Mathematics',
      subjects: [
        {
          id: 'sub6',
          name: 'Algebra',
          marks: [
            { studentId: 's1', basic: 76, advanced: 83, expert: 89 },
            { studentId: 's2', basic: 62, advanced: 70, expert: 78 },
            { studentId: 's3', basic: 86, advanced: 91, expert: 94 },
            { studentId: 's4', basic: 53, advanced: 63, expert: 72 },
            { studentId: 's5', basic: 91, advanced: 94, expert: 97 }
          ]
        },
        {
          id: 'sub7',
          name: 'Geometry',
          marks: [
            { studentId: 's1', basic: 74, advanced: 81, expert: 87 },
            { studentId: 's2', basic: 61, advanced: 69, expert: 77 },
            { studentId: 's3', basic: 84, advanced: 90, expert: 93 },
            { studentId: 's4', basic: 51, advanced: 61, expert: 70 },
            { studentId: 's5', basic: 89, advanced: 93, expert: 96 }
          ]
        },
        {
          id: 'sub8',
          name: 'Statistics',
          marks: [
            { studentId: 's1', basic: 77, advanced: 83, expert: 88 },
            { studentId: 's2', basic: 64, advanced: 71, expert: 79 },
            { studentId: 's3', basic: 85, advanced: 90, expert: 94 },
            { studentId: 's4', basic: 54, advanced: 64, expert: 73 },
            { studentId: 's5', basic: 90, advanced: 94, expert: 97 }
          ]
        },
        {
          id: 'sub12',
          name: 'Calculus',
          marks: [
            { studentId: 's1', basic: 71, advanced: 79, expert: 86 },
            { studentId: 's2', basic: 57, advanced: 65, expert: 74 },
            { studentId: 's3', basic: 82, advanced: 88, expert: 93 },
            { studentId: 's4', basic: 48, advanced: 58, expert: 67 },
            { studentId: 's5', basic: 88, advanced: 92, expert: 96 }
          ]
        }
      ]
    },
    {
      id: 'c4',
      name: 'Social Studies',
      subjects: [
        {
          id: 'sub13',
          name: 'History',
          marks: [
            { studentId: 's1', basic: 79, advanced: 85, expert: 90 },
            { studentId: 's2', basic: 66, advanced: 73, expert: 81 },
            { studentId: 's3', basic: 89, advanced: 93, expert: 96 },
            { studentId: 's4', basic: 57, advanced: 66, expert: 74 },
            { studentId: 's5', basic: 93, advanced: 95, expert: 98 }
          ]
        },
        {
          id: 'sub14',
          name: 'Geography',
          marks: [
            { studentId: 's1', basic: 76, advanced: 82, expert: 88 },
            { studentId: 's2', basic: 63, advanced: 70, expert: 78 },
            { studentId: 's3', basic: 86, advanced: 91, expert: 94 },
            { studentId: 's4', basic: 54, advanced: 63, expert: 72 },
            { studentId: 's5', basic: 91, advanced: 94, expert: 97 }
          ]
        },
        {
          id: 'sub15',
          name: 'Economics',
          marks: [
            { studentId: 's1', basic: 73, advanced: 80, expert: 87 },
            { studentId: 's2', basic: 60, advanced: 68, expert: 76 },
            { studentId: 's3', basic: 84, advanced: 89, expert: 93 },
            { studentId: 's4', basic: 51, advanced: 61, expert: 70 },
            { studentId: 's5', basic: 89, advanced: 93, expert: 96 }
          ]
        }
      ]
    },
    {
      id: 'c5',
      name: 'Physical Education',
      subjects: [
        {
          id: 'sub16',
          name: 'Sports & Fitness',
          marks: [
            { studentId: 's1', basic: 85, advanced: 89, expert: 93 },
            { studentId: 's2', basic: 72, advanced: 78, expert: 84 },
            { studentId: 's3', basic: 80, advanced: 85, expert: 90 },
            { studentId: 's4', basic: 68, advanced: 74, expert: 81 },
            { studentId: 's5', basic: 90, advanced: 93, expert: 96 }
          ]
        }
      ]
    },
    {
      id: 'c6',
      name: 'Arts & Music',
      subjects: [
        {
          id: 'sub17',
          name: 'Visual Arts',
          marks: [
            { studentId: 's1', basic: 80, advanced: 86, expert: 91 },
            { studentId: 's2', basic: 67, advanced: 74, expert: 82 },
            { studentId: 's3', basic: 88, advanced: 92, expert: 95 },
            { studentId: 's4', basic: 59, advanced: 68, expert: 76 },
            { studentId: 's5', basic: 92, advanced: 95, expert: 98 }
          ]
        },
        {
          id: 'sub18',
          name: 'Music Theory',
          marks: [
            { studentId: 's1', basic: 74, advanced: 81, expert: 88 },
            { studentId: 's2', basic: 61, advanced: 69, expert: 77 },
            { studentId: 's3', basic: 83, advanced: 89, expert: 93 },
            { studentId: 's4', basic: 53, advanced: 62, expert: 71 },
            { studentId: 's5', basic: 89, advanced: 93, expert: 96 }
          ]
        }
      ]
    }
  ]
};