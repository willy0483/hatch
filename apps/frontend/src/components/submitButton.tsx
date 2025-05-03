"use client";

import { Button, ButtonProps } from "./ui/button";
import { useActionState } from "react";

export const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const [, , pending] = useActionState(() => {}, undefined);

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};
