import  { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string; // ✅ Ensure that the user object includes an ID
  }

  interface Session extends DefaultSession {
    user: User; // ✅ Now session.user has an ID
  }

  interface CredentialsInputs {
    email: string;
    password: string;
  }
}
