import axios, { AxiosResponse } from 'axios';

export interface ISuccessResponse<TData = unknown> {
  data: TData;
  statusCode: 200 | 201 | 204 | 206 | 207 | 208 | 226;
}

export interface IErrorResponse<TData = unknown> {
  data: TData;
  statusCode: 400 | 401 | 403 | 404 | 422 | 500 | 501 | 502 | 503 | 504;
}

export const API_BASE_URL: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
apiClient.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Tries an axios request, normalizing error / success response.
 *
 * @throws Any non-AxiosError exception.
 */
export const tryRequest = async <TData = unknown, TErrorData = unknown>(
  req: Promise<AxiosResponse<TData>>,
  successDataParser?: (resp: AxiosResponse) => ISuccessResponse<TData>,
): Promise<[IErrorResponse<TErrorData | null>, undefined] | [undefined, ISuccessResponse<TData>]> => {
  try {
    const result = await req;

    return [
      undefined,
      successDataParser
        ? successDataParser(result)
        : {
            statusCode: result.status as 200,
            data: result.data,
          },
    ];
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      throw error;
    }

    return [
      {
        statusCode: (error.response?.status as 400) ?? 400,
        data: error.response?.data ?? null,
      },
      undefined,
    ];
  }
};

export { apiClient };
