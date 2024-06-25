import NodeCache from "node-cache";
const myCache = new NodeCache();

class CacheStorage {
    setCache(key, value, ttl) {
        myCache.set(key, value, ttl);
    }
    getCache(key) {
        return myCache.get(key);
    }
}

export default CacheStorage;
