// src/index.ts
import EventEmitter from "node:events";
import { Keyv } from "keyv";

// src/coalesce-async.ts
var callbacks = /* @__PURE__ */ new Map();
function hasKey(key) {
  return callbacks.has(key);
}
function addKey(key) {
  callbacks.set(key, []);
}
function removeKey(key) {
  callbacks.delete(key);
}
function addCallbackToKey(key, callback) {
  const stash = getCallbacksByKey(key);
  stash.push(callback);
  callbacks.set(key, stash);
}
function getCallbacksByKey(key) {
  return callbacks.get(key) ?? [];
}
async function enqueue(key) {
  return new Promise((resolve, reject) => {
    const callback = { resolve, reject };
    addCallbackToKey(key, callback);
  });
}
function dequeue(key) {
  const stash = getCallbacksByKey(key);
  removeKey(key);
  return stash;
}
function coalesce(options) {
  const { key, error, result } = options;
  for (const callback of dequeue(key)) {
    if (error) {
      callback.reject(error);
    } else {
      callback.resolve(result);
    }
  }
}
async function coalesceAsync(key, fnc) {
  if (!hasKey(key)) {
    addKey(key);
    try {
      const result = await Promise.resolve(fnc());
      coalesce({ key, result });
      return result;
    } catch (error) {
      coalesce({ key, error });
      throw error;
    }
  }
  return enqueue(key);
}

// src/is-object.ts
function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// src/run-if-fn.ts
function runIfFn(valueOrFunction, ...arguments_) {
  return typeof valueOrFunction === "function" ? valueOrFunction(...arguments_) : valueOrFunction;
}

// src/lt.ts
function lt(number1, number2) {
  return typeof number1 === "number" && typeof number2 === "number" ? number1 < number2 : false;
}

// src/keyv-adapter.ts
var KeyvAdapter = class {
  opts;
  namespace;
  _cache;
  constructor(store) {
    this._cache = store;
  }
  async get(key) {
    const value = await this._cache.get(key);
    if (value !== void 0 && value !== null) {
      return value;
    }
    return void 0;
  }
  async set(key, value, ttl) {
    return this._cache.set(key, value, ttl).then(() => true);
  }
  async delete(key) {
    await this._cache.del(key);
    return true;
  }
  async clear() {
    return this._cache.reset?.();
  }
  async has(key) {
    const result = await this._cache.get(key);
    if (result) {
      return true;
    }
    return false;
  }
  async getMany(keys) {
    return this._cache.mget(...keys).then((values) => values.map((value) => value));
  }
  async deleteMany(key) {
    await this._cache.mdel(...key);
    return true;
  }
  /* c8 ignore next 5 */
  on(event, listener) {
    this._cache.on?.(event, listener);
    return this;
  }
  async disconnect() {
    await this._cache.disconnect?.();
  }
};

// src/index.ts
var createCache = (options) => {
  const eventEmitter = new EventEmitter();
  const keyv = new Keyv();
  keyv.serialize = void 0;
  keyv.deserialize = void 0;
  const stores = options?.stores?.length ? options.stores : [keyv];
  const nonBlocking = options?.nonBlocking ?? false;
  const _cacheId = options?.cacheId ?? Math.random().toString(36).slice(2);
  const get = async (key) => {
    let result = null;
    if (nonBlocking) {
      try {
        result = await Promise.race(stores.map(async (store) => store.get(key)));
        if (result === void 0) {
          return null;
        }
      } catch (error) {
        eventEmitter.emit("get", { key, error });
      }
    } else {
      for (const store of stores) {
        try {
          const cacheValue = await store.get(key);
          if (cacheValue !== void 0) {
            result = cacheValue;
            eventEmitter.emit("get", { key, value: result });
            break;
          }
        } catch (error) {
          eventEmitter.emit("get", { key, error });
        }
      }
    }
    return result;
  };
  const mget = async (keys) => {
    const result = [];
    for (const key of keys) {
      const data = await get(key);
      result.push(data);
    }
    return result;
  };
  const ttl = async (key) => {
    let result = null;
    if (nonBlocking) {
      try {
        result = await Promise.race(stores.map(async (store) => store.get(key, { raw: true })));
        if (result === void 0) {
          return null;
        }
      } catch (error) {
        eventEmitter.emit("ttl", { key, error });
      }
    } else {
      for (const store of stores) {
        try {
          const cacheValue = await store.get(key, { raw: true });
          if (cacheValue !== void 0) {
            result = cacheValue;
            eventEmitter.emit("ttl", { key, value: result });
            break;
          }
        } catch (error) {
          eventEmitter.emit("ttl", { key, error });
        }
      }
    }
    if (result?.expires) {
      return result.expires;
    }
    return null;
  };
  const set = async (stores2, key, value, ttl2) => {
    try {
      if (nonBlocking) {
        Promise.all(stores2.map(async (store) => store.set(key, value, ttl2 ?? options?.ttl)));
        eventEmitter.emit("set", { key, value });
        return value;
      }
      await Promise.all(stores2.map(async (store) => store.set(key, value, ttl2 ?? options?.ttl)));
      eventEmitter.emit("set", { key, value });
      return value;
    } catch (error) {
      eventEmitter.emit("set", { key, value, error });
      return Promise.reject(error);
    }
  };
  const mset = async (stores2, list) => {
    const items = list.map(({ key, value, ttl: ttl2 }) => ({ key, value, ttl: ttl2 }));
    try {
      const promises = [];
      for (const item of list) {
        promises.push(...stores2.map(async (store) => store.set(item.key, item.value, item.ttl)));
      }
      if (nonBlocking) {
        Promise.all(promises);
        eventEmitter.emit("mset", { list });
        return list;
      }
      await Promise.all(promises);
      eventEmitter.emit("mset", { list });
      return list;
    } catch (error) {
      eventEmitter.emit("mset", { list, error });
      return Promise.reject(error);
    }
  };
  const del = async (key) => {
    try {
      if (nonBlocking) {
        Promise.all(stores.map(async (store) => store.delete(key)));
        eventEmitter.emit("del", { key });
        return true;
      }
      await Promise.all(stores.map(async (store) => store.delete(key)));
      eventEmitter.emit("del", { key });
      return true;
    } catch (error) {
      eventEmitter.emit("del", { key, error });
      return Promise.reject(error);
    }
  };
  const mdel = async (keys) => {
    try {
      const promises = [];
      for (const key of keys) {
        promises.push(...stores.map(async (store) => store.delete(key)));
      }
      if (nonBlocking) {
        Promise.all(promises);
        eventEmitter.emit("mdel", { keys });
        return true;
      }
      await Promise.all(promises);
      eventEmitter.emit("mdel", { keys });
      return true;
    } catch (error) {
      eventEmitter.emit("mdel", { keys, error });
      return Promise.reject(error);
    }
  };
  const clear = async () => {
    try {
      if (nonBlocking) {
        Promise.all(stores.map(async (store) => store.clear()));
        eventEmitter.emit("clear");
        return true;
      }
      await Promise.all(stores.map(async (store) => store.clear()));
      eventEmitter.emit("clear");
      return true;
    } catch (error) {
      eventEmitter.emit("clear", error);
      return Promise.reject(error);
    }
  };
  const wrap = async (key, fnc, ttlOrOptions, refreshThresholdParameter) => coalesceAsync(`${_cacheId}::${key}`, async () => {
    let value;
    let rawData;
    let i = 0;
    let remainingTtl;
    const { ttl: ttl2, refreshThreshold, raw } = isObject(ttlOrOptions) ? ttlOrOptions : { ttl: ttlOrOptions, refreshThreshold: refreshThresholdParameter };
    const resolveTtl = (result) => runIfFn(ttl2, result) ?? options?.ttl;
    for (; i < stores.length; i++) {
      try {
        const data = await stores[i].get(key, { raw: true });
        if (data !== void 0) {
          value = data.value;
          rawData = data;
          if (typeof data.expires === "number") {
            remainingTtl = Math.max(0, data.expires - Date.now());
          }
          break;
        }
      } catch {
      }
    }
    if (value === void 0) {
      const result = await fnc();
      const ttl3 = resolveTtl(result);
      await set(stores, key, result, ttl3);
      return raw ? { value: result, expires: Date.now() + ttl3 } : result;
    }
    const shouldRefresh = lt(remainingTtl, runIfFn(refreshThreshold, value) ?? options?.refreshThreshold);
    if (shouldRefresh) {
      coalesceAsync(`+++${_cacheId}__${key}`, fnc).then(async (result) => {
        try {
          await set(options?.refreshAllStores ? stores : stores.slice(0, i + 1), key, result, resolveTtl(result));
          eventEmitter.emit("refresh", { key, value: result });
        } catch (error) {
          eventEmitter.emit("refresh", { key, value, error });
        }
      }).catch((error) => {
        eventEmitter.emit("refresh", { key, value, error });
      });
    }
    if (!shouldRefresh && i > 0) {
      await set(stores.slice(0, i), key, value, resolveTtl(value));
    }
    return raw ? rawData : value;
  });
  const on = (event, listener) => eventEmitter.addListener(event, listener);
  const off = (event, listener) => eventEmitter.removeListener(event, listener);
  const disconnect = async () => {
    try {
      await Promise.all(stores.map(async (store) => store.disconnect()));
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const cacheId = () => _cacheId;
  return {
    get,
    mget,
    ttl,
    set: async (key, value, ttl2) => set(stores, key, value, ttl2),
    mset: async (list) => mset(stores, list),
    del,
    mdel,
    clear,
    wrap,
    on,
    off,
    disconnect,
    cacheId,
    stores
  };
};
export {
  KeyvAdapter,
  createCache
};
