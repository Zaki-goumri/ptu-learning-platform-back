export const ACHIEVEMENT_RARITY = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary',
} as const;

export type AchievementRarity = (typeof ACHIEVEMENT_RARITY)[keyof typeof ACHIEVEMENT_RARITY];

export const ACHIEVEMENT_RARITY_VALUES = Object.values(ACHIEVEMENT_RARITY) as AchievementRarity[]; 