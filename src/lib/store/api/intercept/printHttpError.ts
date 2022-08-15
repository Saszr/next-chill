interface PrintCase {
  method?: string;
  url?: string;
  data?: string;
}

/**
 * @param httpStatus
 * @param path
 */
export const printHttpError = (httpStatus: number, path: string): void => {
  switch (httpStatus) {
    case 400:
      console.log(`400 Bad Request ${path}`);
      break;
    case 401:
      console.log('401 Unauthorized');
      window.location.reload();
      break;
    case 403:
      console.log('403 Forbidden');
      window.localStorage.clear();
      window.location.reload();
      break;
    case 404:
      console.log('404 Not Found');
      break;
    default:
      console.log('unknown error');
      break;
  }
};

/**
 * @param type
 * @param params
 */
export const printPanel = (params: PrintCase): void => {
  const str = `
    req.method: ${params?.method} \n
    req.url: ${params?.url} \n
    req.body: ${params?.data}
    `;

  console.group();
  console.log(str);
  console.groupEnd();
};
