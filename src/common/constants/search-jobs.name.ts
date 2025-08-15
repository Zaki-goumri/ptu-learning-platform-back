export const SEARCH_JOB_NAME = {
  INDEX_DOCUMENT: 'index_document',
  UPDATE_DOCUMENT: 'update_document',
  DELETE_DOCUMENT: 'delete_document',
} as const;

export type SearchJobName =
  (typeof SEARCH_JOB_NAME)[keyof typeof SEARCH_JOB_NAME];

export interface IndexDocumentJob<T> {
  index: string;
  id: string;
  document: T;
}

export interface UpdateDocumentJob<T> {
  index: string;
  id: string;
  document: Partial<T>;
}

export interface DeleteDocumentJob {
  index: string;
  id: string;
}

export type SearchJob<T> =
  | IndexDocumentJob<T>
  | UpdateDocumentJob<T>
  | DeleteDocumentJob;
