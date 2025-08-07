export const ATTENDANCE_SESSION = {
  MORNING: 'morning',
  AFTERNOON: 'afternoon',
} as const;

export type AttendanceSession = (typeof ATTENDANCE_SESSION)[keyof typeof ATTENDANCE_SESSION];

export const ATTENDANCE_SESSION_VALUES = Object.values(ATTENDANCE_SESSION) as AttendanceSession[]; 