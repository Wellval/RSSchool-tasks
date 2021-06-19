import { Dictionary } from './Dictionary';

const apiHost = 'http://localhost:3000';

export type ApiCallContext = {
  url: string,
  params?: Dictionary,
  data?: Dictionary,
  method: string
};

export type ApiResponse<T> = {
  code: number,
  response: T | string,
  headers: Dictionary
};

export async function api<T>(context: ApiCallContext): Promise<ApiResponse<T>> {
  const url = new URL(apiHost + context.url);

  if (context.params) {
    for (const key of Object.keys(context.params)) {
      url.searchParams.append(key, context.params[key].toString());
    }
  }

  const fetchResult = await fetch(url.href, {
    method: context.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: context.data ? JSON.stringify(context.data) : undefined,
  });

  let content: T | string | undefined;
  const buffer = await fetchResult.text();

  try {
    content = JSON.parse(buffer);
  } catch (e) {
    content = buffer;
  }

  const headers: Dictionary = {};

  for (const key of Array.from(fetchResult.headers.keys())) {
    headers[key] = fetchResult.headers.get(key) || '';
  }

  return {
    code: fetchResult.status,
    response: content!,
    headers,
  };
}
