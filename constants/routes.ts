const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/question/${id}`,
  COLLECTION: "/collection",
  COMMUNITY: "/community",
  JOBS: "/job",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  // PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
