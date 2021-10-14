/** HTTP headers only allow for strings */
export interface Headers {
  [key: string]: string;
}

/** LookupTable, so we can reconstruct all items in local DB. */
export interface LookupTable {
  /** lookupTable with an array of [url, referer] for every resource */
  [hash: string]: [string, string][];
}

export interface CacheItem {
  /** the 'id' of this resource, calculated from url + body */
  hash: string;
  /** the url this resource is loaded from  */
  url: string;
  /** the environment for this cache item */
  environment: string;
  /** projectName for this cache item */
  project: string;
  /** the time this resource is created, used for TTL calculation */
  inserted: number;
  /** the request headers */
  requestHeaders: Headers;
  /** time to live for this resource in milliseconds */
  TTL: number;
  /** the response from the server  */
  response: {
    /** response headers form server */
    headers: Headers;
    /** contentTYpe provided by server, extracted form above headers */
    contentType: string;
    /** the status. note that _error_ and other states are also cached! */
    status: number;
    /** the raw body from the server */
    body: string;
  };
}

export interface LocalCacheConfig {
  /** use the Referer as a key differentiation, defaults to false */
  includeReferer?: boolean;
  /** your Scully Enterprise customerID, as provided by HeroDevs */
  environment?: 'dev' | 'prod' | 'staging' | 'test';
  /** the default Time To Live. 12 hours if unset */
  defaultTTL?: number;
  /** TTL exceptions */
  ttlExceptions?: {
    /** the full URL, is used as: `testurl.startsWith(urlStart)`  */
    [urlStart: string]: number;
  };
}

export interface GetMyCache {
  currentHash: string;
  storeTime: number;
  hashes: string[];
  lookUpTable: LookupTable;
  lookupHash: string;
}
