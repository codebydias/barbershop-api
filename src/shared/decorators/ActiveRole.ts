import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

interface RequestWithRole {
  role: string;
}

const ActiveRole = createParamDecorator((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<RequestWithRole>();
  const role = request.role;

  if (!role) throw new UnauthorizedException();

  return role;
});

export default ActiveRole;
