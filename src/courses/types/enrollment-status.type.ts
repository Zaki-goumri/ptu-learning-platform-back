export const ENROLLMENT_STATUS = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING',
  SUSPENDED: 'SUSPENDED',
} as const;

export type EnrollmentStatus = (typeof ENROLLMENT_STATUS)[keyof typeof ENROLLMENT_STATUS];

export const ENROLLMENT_STATUS_VALUES = Object.values(ENROLLMENT_STATUS) as EnrollmentStatus[];
