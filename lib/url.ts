import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  console.log("Params:", params);
  console.log("Params Key:", params);
  console.log("Params Value:", params);

  const currentUrl = qs.parse(params);

  console.log("current URL:", currentUrl);

  // update to new key and value
  currentUrl[key] = value;
  return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl });
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.map((key) => delete queryString[key]);

  return qs.stringifyUrl({ url: window.location.pathname }, { skipNull: true });
};
