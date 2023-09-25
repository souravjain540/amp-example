/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Age } from "@prisma/client";

export class AgeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AgeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeCountArgs>
  ): Promise<number> {
    return this.prisma.age.count(args);
  }

  async findMany<T extends Prisma.AgeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeFindManyArgs>
  ): Promise<Age[]> {
    return this.prisma.age.findMany(args);
  }
  async findOne<T extends Prisma.AgeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeFindUniqueArgs>
  ): Promise<Age | null> {
    return this.prisma.age.findUnique(args);
  }
  async create<T extends Prisma.AgeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeCreateArgs>
  ): Promise<Age> {
    return this.prisma.age.create<T>(args);
  }
  async update<T extends Prisma.AgeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeUpdateArgs>
  ): Promise<Age> {
    return this.prisma.age.update<T>(args);
  }
  async delete<T extends Prisma.AgeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgeDeleteArgs>
  ): Promise<Age> {
    return this.prisma.age.delete(args);
  }
}
