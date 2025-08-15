export const SEARCH_JOB_NAME = {
  INDEX_DOCUMENT: 'index_document',
  UPDATE_DOCUMENT: 'update_document',
  DELETE_DOCUMENT: 'delete_document',
};

export interface IndexDocumentJob<T> {
  index: string; // Elasticsearch index name (e.g., 'users', 'courses')
  id: string;    // Document ID (e.g., user.id, course.id)
  document: T;   // The document to index
}

export interface UpdateDocumentJob<T> {
  index: string;
  id: string;
  document: Partial<T>; // Partial document for updates
}

export interface DeleteDocumentJob {
  index: string;
  id: string;
}
