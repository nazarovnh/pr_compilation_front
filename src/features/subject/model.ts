export interface GetSubjectsResponse {
  subjects: Subject[];
}

export interface Subject {
  subjectId: string;
  numberHours: number;
  subjectTitle: string;
  subjectDescription: string;
}
