import Link from "next/link";

const SigninPanel = () => {
  return (
    <>
      <Link href={"/auth/signin"}>Sign In</Link>
      <Link href={"/auth/signup"}>Sign Up</Link>
    </>
  );
};
export default SigninPanel;
