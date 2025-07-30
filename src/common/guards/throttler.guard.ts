import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';
@Injectable()
export class HybridThrottlerGuard extends ThrottlerGuard {
  protected getRequestResponse(context: ExecutionContext): {
    req: Record<string, any>;
    res: Record<string, any>;
  } {
    const type = context.getType<'http' | 'graphql'>();

    if (type === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context).getContext();
      return {
        req: gqlContext.req,
        res: gqlContext.req.res,
      };
    }

    const httpContext = context.switchToHttp();
    return {
      req: httpContext.getRequest(),
      res: httpContext.getResponse(),
    };
  }
}
