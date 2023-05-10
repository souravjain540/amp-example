/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteHelloArgs } from "./DeleteHelloArgs";
import { HelloFindManyArgs } from "./HelloFindManyArgs";
import { HelloFindUniqueArgs } from "./HelloFindUniqueArgs";
import { Hello } from "./Hello";
import { HelloService } from "../hello.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Hello)
export class HelloResolverBase {
  constructor(
    protected readonly service: HelloService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Hello",
    action: "read",
    possession: "any",
  })
  async _hellosMeta(
    @graphql.Args() args: HelloFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Hello])
  @nestAccessControl.UseRoles({
    resource: "Hello",
    action: "read",
    possession: "any",
  })
  async hellos(@graphql.Args() args: HelloFindManyArgs): Promise<Hello[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Hello, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Hello",
    action: "read",
    possession: "own",
  })
  async hello(
    @graphql.Args() args: HelloFindUniqueArgs
  ): Promise<Hello | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Hello)
  @nestAccessControl.UseRoles({
    resource: "Hello",
    action: "delete",
    possession: "any",
  })
  async deleteHello(
    @graphql.Args() args: DeleteHelloArgs
  ): Promise<Hello | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
