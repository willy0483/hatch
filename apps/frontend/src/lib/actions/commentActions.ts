"use server";

import { print } from "graphql";
import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL";
import { CREATE_COMMENT_MUTATION, GET_POST_COMMENTS } from "../gqlQueries";
import { CommentEntity } from "../types/modelTypes";
import { CreateCommentFormState } from "../types/formState";
import { CommentFormSchema } from "../types/commentFormSchema";

export const getPostComments = async ({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) => {
  const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
    postId,
    take,
    skip,
  });

  return {
    comments: data.getPostComments as CommentEntity[],
    count: data.postCommentCount as number,
  };
};

export const saveComment = async (
  state: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> => {
  const validatedFields = CommentFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await authFetchGraphQL(print(CREATE_COMMENT_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data)
    return {
      message: "Success! Your comment saved!",
      ok: true,
      open: false,
    };

  return {
    message: "Oops! something went wrong!",
    ok: false,
    open: true,
    data: Object.fromEntries(formData.entries()),
  };
};
