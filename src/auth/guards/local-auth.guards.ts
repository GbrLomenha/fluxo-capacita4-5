import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuards extends AuthGuard('local') {
    canActivate(context: ExecutionContext){
        return super.canActivate(context);
    }

}