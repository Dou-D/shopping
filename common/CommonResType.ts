interface CommonResType<T> {
  code: string;
  data: T;
  message: string;
}
interface LoginResType {
  token: string;
}
export const handleFetchResolveConfig = (res: CommonResType<LoginResType>) => {
  return res.data.token;
};

export const handleFetchRejectConfig = (err: Error) => {
  throw new Error(err.message);
};
