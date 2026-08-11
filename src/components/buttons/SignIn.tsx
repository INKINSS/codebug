import { signIn } from "@/root/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">iniciar sesion con Github</button>
    </form>
  );
}
