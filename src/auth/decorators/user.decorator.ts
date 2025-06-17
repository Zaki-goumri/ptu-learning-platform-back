import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { extendedReq } from '../types/request-with-user.type';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<extendedReq>();
    return req.user;
  },
);
