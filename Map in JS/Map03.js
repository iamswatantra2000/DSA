// calculate the expensive operations by using caching and that caching can be done by using map easily.̦

const n = 10;

function fib(n) {
    //ek map banao
  let cacheStore = new Map();

  //check karo, map me n present hai ya nahi, hai toh return kardo warna map me store kardo
  if (cacheStore.has(n)) {
    return cacheStore.get(n);
  }

  
  if (n <= 2) {
    return 1;
  }

  const result = fib(n - 1) + fib(n - 2);

  return result;
}

console.log(fib(n));
