import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AgeService } from "./age.service";
import { AgeControllerBase } from "./base/age.controller.base";

@swagger.ApiTags("ages")
@common.Controller("ages")
export class AgeController extends AgeControllerBase {
  constructor(
    protected readonly service: AgeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
