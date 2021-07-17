import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface DataProps {
  [key: string]: string;
}

interface RequestOptions {
  headers?: AxiosRequestConfig;
  data?: DataProps;
}

interface RequestProps {
  post: (url: string, options?: RequestOptions) => Promise<ResponseProps>;
  get: (url: string, options?: RequestOptions) => Promise<ResponseProps>;
}

// Modify it to fit your project and remove this comment
export interface ResponseProps {
  code: number;
  data: any;
}

const Request: RequestProps = {
  post(url, options): Promise<ResponseProps> {
    const headers = options?.headers || {};
    const data = options?.data || {};
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    return new Promise((resolve, reject) => {
      Axios.post(url, formData, { headers })
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch((e) => reject(e));
    });
  },
  get(url, options): Promise<ResponseProps> {
    const headers = options?.headers || {};
    const data = options?.data || {};

    return new Promise((resolve, reject) => {
      Axios.get(url, { headers, data })
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch((e) => reject(e));
    });
  },
};

export default Request;
