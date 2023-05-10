import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HelloService } from "./hello.service";
import { HelloControllerBase } from "./base/hello.controller.base";

@swagger.ApiTags("hellos")
@common.Controller("hellos")
export class HelloController extends HelloControllerBase {
  constructor(
    protected readonly service: HelloService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
