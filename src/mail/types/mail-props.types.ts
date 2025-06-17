import { User } from 'src/user/entities/user.entity';

export type WelcomeEmailProps = Omit<
  User,
  'department' | 'year' | 'role' | 'yearGroup'
> & {
  tempPass: string;
};

export interface OtpMailProps {
  email: string;
  otp: string;
}
