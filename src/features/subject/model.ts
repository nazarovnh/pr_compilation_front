export interface GetSubjectsResponse {
  subjects: Subject[];
}

export interface TopicSubjectGetResponse {
  topicId: string;
  topicTitle: string;
  numbersTasks: number;
  completelyTasks: number;
}

export interface GetSubjectRequest {
  subjectId: string;
  subjectTitle: string;
  subjectDescription: string;
  numberTasks: number;
  languages: string[];
  topics: TopicSubjectGetResponse[];
}

export interface Subject {
  subjectId: string;
  numberHours: number;
  subjectTitle: string;
  subjectDescription: string;
}
