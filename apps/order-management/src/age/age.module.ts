import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgeModuleBase } from "./base/age.module.base";
import { AgeService } from "./age.service";
import { AgeController } from "./age.controller";

@Module({
  imports: [AgeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgeController],
  providers: [AgeService],
  exports: [AgeService],
})
export class AgeModule {}
