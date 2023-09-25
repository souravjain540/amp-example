import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgeServiceBase } from "./base/age.service.base";

@Injectable()
export class AgeService extends AgeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
