declare namespace Http {
  type Options = {
    url: string;
  };
}

export async function Http<T = unknown>({ url }: Http.Options): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          foo: 'bar',
        },
      } as any);
    }, 2000);
  });
}
