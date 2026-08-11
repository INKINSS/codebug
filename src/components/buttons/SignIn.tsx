import { signIn } from "@/root/auth";

type SignInProps = {
  provider: string;
};

export default function SignIn({ provider }: SignInProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button className="btn btn-outline btn-accent" type="submit">iniciar sesion con {provider}</button>
    </form>
  );
}
