import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is react?",
    description:
      "I dont understand what is react, please someone give a brief intro.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "Sandeep Dewangan" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Why i am getting error in command?",
    description:
      "I dont understand what is react, please someone give a brief intro. The command is not for begineers",
    tags: [
      { _id: "1", name: "Shell" },
      { _id: "2", name: "Bash" },
    ],
    author: { _id: "2", name: "Khushbu Dewangan" },
    upvotes: 5,
    answers: 3,
    views: 500,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  // const session = await auth();
  // console.log(session);

  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <Button>
        <Link href={ROUTES.ASK_QUESTION}>As a Question</Link>
      </Button>
      <h1 className="text-3xl text-primary-500 pt-2 font-bold">
        All Questions
      </h1>
      <div className="pt-5">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeHolder="Search questions"
        />
      </div>
      <div>Filters</div>
      <div className="flex flex-col gap-5 pt-5">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>

      {/* Logout form */}
      {/* <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Logout</button>
      </form> */}
    </>
  );
};

export default Home;
