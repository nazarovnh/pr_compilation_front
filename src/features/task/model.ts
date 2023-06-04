import { Language } from '../../app/constants';

export interface ExecuteResponse {
  result: string;
  resultStatus: number;
  // private List<TestCaseResult> testCaseResultList;
  executedTime: number;
}

export interface ExecuteRequest {
  topicId?: string;
  taskId?: string;
  sourceCode: File;
  language: Language;
}

export interface CodeRequest {
  language: string;
  sourceCode: File;
}

export interface GetTaskRequest {
  taskId: string;
}

export interface GetTaskResponse {
  taskTitle: string;
  taskDescription: string;
  timeLimit: number;
  memoryLimit: number;
  exampleInput: string;
  exampleCorrectOutput: string;
}
