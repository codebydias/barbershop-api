import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

interface RequestWithId {
  userId: string;
}

const ActiveUserId = createParamDecorator((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<RequestWithId>();
  const userId = request.userId;

  if (!userId) throw new UnauthorizedException();

  return userId;
});
