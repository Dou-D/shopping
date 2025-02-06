type methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export const myFetch = async <T, R>(
  url: string,
  method: methods,
  data?: T,
  ...rest: any
): Promise<R> => {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
        ...rest,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
