const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  COLLECTION: "/collection",
  COMMUNITY: "/community",
  JOBS: "/job",
  PROFILE: "/profile",
  TAGS: (id: string) => `/tags/${id}`,
  // PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
