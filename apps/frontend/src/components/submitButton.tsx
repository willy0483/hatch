import { useFormState } from "react-dom";
import { Button, ButtonProps } from "./ui/button";

export const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormState({ state: {}, action: () => {} });

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};
