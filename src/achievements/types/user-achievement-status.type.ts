export const USER_ACHIEVEMENT_STATUS = {
  EARNED: 'earned',
  IN_PROGRESS: 'in-progress',
  LOCKED: 'locked',
} as const;

export type UserAchievementStatus = (typeof USER_ACHIEVEMENT_STATUS)[keyof typeof USER_ACHIEVEMENT_STATUS];

export const USER_ACHIEVEMENT_STATUS_VALUES = Object.values(USER_ACHIEVEMENT_STATUS) as UserAchievementStatus[]; 