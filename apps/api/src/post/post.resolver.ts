import { Resolver, Query, Context } from '@nestjs/graphql';
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

  @UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll(@Context() context: RequestWithUser) {
    const user = context.req.user;

    console.log({ user });

    return this.postService.findAll();
  }
}
