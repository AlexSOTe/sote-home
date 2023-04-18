class Http {
  constructor(options?: any) {
  }
  InitHttp(url: string, paramsObj?: BodyInit, options?: RequestInit) {
    let _opt: RequestInit = {};
    if (paramsObj) {
      _opt.body = paramsObj;
    }
    if (options) {
      _opt = { ..._opt, ...options };
    }
    return fetch(url, _opt);
  }
  get(url: string, paramsObj?: BodyInit, options?: RequestInit) {
    const _options: RequestInit = options ? options : {
      method: 'get',
    }
    return this.InitHttp(url, paramsObj, _options);
  }
  post(url: string, paramsObj?: BodyInit, options?: RequestInit) {
    const _options: RequestInit = options ? options : {
      method: 'post',
    }
    return this.InitHttp(url, paramsObj, _options);
  }
}

export const http = new Http();
