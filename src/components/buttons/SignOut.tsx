import { signOut } from "@/root/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Cerrar Sesión</button>
    </form>
  );
}
