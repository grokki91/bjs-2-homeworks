function cachingDecoratorNew(func) {
  let cache = [];
  let cacheObj = {};
  function wrapper(...args) {
    const hash = args.join(',');
    args = hash;
    let cacheIndex = cache.findIndex(elem => elem.hash === args);
    if (cacheIndex !== -1) {
      return `Из кэша: ${cache[cacheIndex].value}`;
    }

    let argsParse = JSON.parse("[" + args + "]");
    let value = func(...argsParse);
    cacheObj = {hash, value};
    cache.push(cacheObj);
    if (cache.length > 5) {
      cache.shift(cacheObj);
    }

    return `Вычисляем: ${value}`;
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let firstStartFunc = true;
  function wrapper(...args) {
    wrapper.allCount++;
    if (firstStartFunc) {
      func(...args);
      firstStartFunc = false;
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      timeoutId = null;
      func(...args);
    }, delay);
    
  }
  wrapper.allCount = 0;
  wrapper.count = 0;

  return wrapper;
}