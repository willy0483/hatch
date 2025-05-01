import { Resolver, Query, Context, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

interface RequestWithUser {
  req: {
    user: {
      id: number; // Adjust the type based on your user object
      [key: string]: any; // Add additional properties if needed
    };
  };
}

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // adds auth token
  //@UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll(
    @Context() context: RequestWithUser,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    const user = context.req.user;
    console.log({ user });
    console.log({ skip, take }); // Debugging

    return this.postService.findAll({ skip, take });
  }

  @Query(() => Int, { name: 'postsCount' })
  count() {
    return this.postService.count();
  }

  @Query(() => Post)
  getPostById(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }
}
