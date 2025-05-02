"use server";

import { redirect } from "next/navigation";
import { fetchGraphQL } from "../fetchGraphQL";
import { CREATE_USER_MUTATION } from "../gqlQueries";
import { SignUpFormState } from "../types/formState";
import { SignUpFormSchema } from "../zodSchemas/signUpFormSchema";
import { print } from "graphql";

export const signup = async (
  state: SignUpFormState,
  fromData: FormData
): Promise<SignUpFormState> => {
  const vaildatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(fromData.entries())
  );

  if (!vaildatedFields.success) {
    return {
      data: Object.fromEntries(fromData.entries()),
      errors: vaildatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...vaildatedFields.data,
    },
  });

  if (data.errors) {
    return {
      data: Object.fromEntries(fromData.entries()),
      message: "Something went wrong",
    };
  }
  redirect("/auth/signin");
};
