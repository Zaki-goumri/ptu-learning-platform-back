import { Socket } from 'socket.io';
import { IAcessTokenPayload } from 'src/auth/types/token-payload.type';

export interface IClient extends Socket {
  data: { user: IAcessTokenPayload };
}
