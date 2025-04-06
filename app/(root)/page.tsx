import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="text-3xl text-primary-500 pt-12">Hello world!</h1>
      {/* Logout form */}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Home;
