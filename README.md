# Next Js - Dev Flow Project

## Project Setup

**VS Code Extensions**

1. Babel JavaScript
2. Better Comments
3. Catppuccin for VSCode
4. ESLint
5. IntelliCode
6. Material Icon Theme
7. npm Intellisense
8. Path Intellisense
9. Prettier - Code formatter
10. Prettier ESLint
11. Pretty TypeScript Errors
12. Tailwind CSS IntelliSense

**Create Project**
`npx create-next-app@latest`
With following options

- typescript
- tailwind
- app router
- turbopack

**Eslint**
Install Prettier, Prettier Eslint and Eslint VS Code plugin first

Install package `npm install eslint-config-standard`

Under `eslint.config.mjs`

add -> "standard"

Install Package `npm install eslint-plugin-tailwindcss`

Under `eslint.config.mjs`

add -> "plugin:tailwindcss/recommended"

Install Package `npm install eslint-config-prettier`

Under `eslint.config.mjs`

add -> "prettier"

Install Package `npm install eslint-plugin-import --save-dev`

Under `eslint.config.mjs`

How to configure this is unclear, as eslint.config.mjs is new

**Configure all settings of VS Code**

Create a folder `.vscode`

Under this create `settings.json`

## Authentication (OAuth)

Setup authentication for sign-in using Github or Google.

https://authjs.dev/

## State Management

Local State Management -> useState()

Global State Management -> Zustand, Jotai, Redux, ContextAPI (without any library) etc.

Note: Redux, Context API, Zustand and others all are hooks based, we cannot use on the server side (atleast for now).
Hooks like useState, useEffect are not available on server side bez they interact with the DOM which doesnot appears on the server.

**We will use URL based state management.**

## URL State Management

A URL (Uniform Resource Locator) with parameters typically consists of several components:

**Scheme**: Specifies the protocol used to access the resource, such as http:// or https://.

**Domain**: The domain name or IP address of the server hosting the resource.

**Port**: (Optional) Specifies the port number to which the request should be sent. Default ports are often omitted (e.g., port 80 for HTTP, port 443 for HTTPS).

**Path**: The specific resource or endpoint on the server, typically represented as a series of directories and filenames.

**Query Parameters**: (Also known as searchParams in Next.js) Additional data sent to the server as part of the request, typically used for filtering or modifying the requested resource. Query parameters are appended to the URL after a question mark "?" and separated by ampersands "&"

For example: ?param1=value1¶m2=value2

**Fragment**: (Optional) Specifies a specific section within the requested resource, often used in web pages to navigate to a particular section. It is indicated by a hash "#" followed by the fragment identifier.

#### How to retrieve url parameters (Server Side):

For example, If the URL looks like this: `/books/1234/?page=2&filter=latest`

Then, params will hold the 1234 value, searchParams will hold page & filter values This is how you can get the info

```javascript
async function Page({ params, searchParams }) {
  const { id } = await params;
  const { page, filter } = await searchParmas;

  return <h1>My Page</h1>;
}
export default Page;
```

#### How to retrieve url parameters (Client Side) using Hooks:

```javascript
"use client";

import { useParams, useSearchParams } from "next/navigation";

function ExampleClientComponent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return <p>Example Client Component</p>;
}

export default ExampleClientComponent;
```

#### How to pass or generate URL parameters

**Way-1: Server Side**
`/jobs?type=softwaredeveloper`

```javascript
<Link
  href={{
    pathname: "/jobs",
    query: { type: "softwaredeveloper" },
  }}
>
  All Jobs
</Link>
```

**Way-2: Client Side using Hooks**
`/search?q=your_search_query_here`

```javascript
"use client";

import { useRouter } from "next/navigation";

const MyComponent = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: "/search",
      query: { q: "your_search_query_here" },
    });
  };

  return <button onClick={handleButtonClick}>Search</button>;
};

export default MyComponent;
```

**Way-3: Programatically**

```javascript
const handleButtonClick = () => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("q", "your_search_query_here");

  window.location.href = `${
    window.location.pathname
  }?${searchParams.toString()}`;
};
```

**Way-4: Using query-string package**

### Logging

Pino Logger

- super fast, json logger.
- Handly for tracking and monitoring.
- Perfect for Nextjs.

`npm i pino`

`npm i pino-pretty` // more readable form

### Serverless Backend

- You write code, and Cloud providers like AWS, Google Cloud, Azure, or Vercel handle everything else for you.
- While the term “serverless” might sound like there are no servers involved, servers do exist—they are just fully managed by a cloud provider, abstracted away from you, developers. But why this abstraction?
- This abstraction allows you to focus on writing application logic while cloud providers handle infrastructure, scaling, and maintenance of your backend.
- A serverless backend is a collection of different **serverless functions** that work together to form an application's backend logic.
