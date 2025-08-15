import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class AccessTokenGuard extends AuthGuard('access-token') {
  getRequest(context: ExecutionContext): {
    req: Record<string, any>;
  } {
    const type = context.getType<'http' | 'graphql'>();

    if (type === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      return gqlContext.req;
    }
    const httpContext = context.switchToHttp();
    return httpContext.getRequest();
  }
}
