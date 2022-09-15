function cachingDecoratorNew(func) {
  let cache = [];
  let cacheObj = {};
  function wrapper(...args) {
    const hash = args.join(',');
    let cacheIndex = cache.findIndex(elem => {
      if (elem.hash.every((element, index) => element === args[index])) 
        return elem;
      }
    )
    if (cacheIndex === -1) {
      let result = func(...args);
      cacheObj = {
        hash : args,
        value : result
      }

      cache.push(cacheObj);
      if (cache.length > 5) {
        cache.shift(cacheObj);
      }
      return `Вычисляем: ${result}`;
    } else {
      return `Из кэша: ${cache[cacheIndex].value}`;
    }
  }
  return wrapper;
}


// function debounceDecoratorNew(func, delay) {
//   let count = 0;
//   let timeoutId = null;
//   function wrapper(...args) {
//     wrapper.allCount.push(args);
//     if (timeoutId) {
//       console.log(timeoutId);
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       timeoutId = null;
//       console.log(func(...args));
//     }, delay);

//   }
//   wrapper.allCount = [];

//   return wrapper;
// }