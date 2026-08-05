import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    // Map 'id' request to the 'userId' returned by your JwtStrategy
    if (data === 'id') {
      return user?.userId;
    }

    return data ? user?.[data] : user;
  },
);