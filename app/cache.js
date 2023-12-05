/**
 * "least recently used cache"
 * when the cache memory is full, LRU picks the data that is least recently used 
 * and removes to make space for the new data 
*/ 
const lru = require('lru-cache');
const cache = new lru({ max: 1000 });

// gets a key from the cache 
// or fetch if not present
async function getCachedOrFetch(key, fetchFunction) {
  // check if key is in cache
  const cachedData = cache.get(key);

  if (cachedData) {
    console.log(`cache hit for key: ${key}`);
    return cachedData;
  }
  console.log(`cache miss for key: ${key}`);

  // fetch data if not in cache
  const newData = await fetchFunction();

  // store fetched data in cache
  cache.set(key, newData);
  return newData;
}

module.exports = {
  getCachedOrFetch,
};
