function sqrt(x) {
  // base conditions
  if (x < 0) return -1;
  else if (x <= 1) return x;
  /* Brute Force Solution */
  /**
   * As a brute force solution i will go for muliplying with 0.5 with the number so that i
   * can get the solution
   * O(n^2) ==> W.C
   * O(1) ===> B.C
   * O(n^2) ===> A.C
   * */
  //   return Math.floor(x ** 0.5);
  /** Optimize
   * As in the brute force solution the time taken is O(n^2) we can optimize this to O(logn)
   * can get the solution
   * O(logn) ==> W.C
   * O(1) ===> B.C
   * O(logn/2)== O(logn) ===> A.C
   * */
  /* Using Two pointer Solution */

  //   else {
  //     if (x > (2 ** 32) - 1) return -1;
  //     let left = 1;
  //     let right = Number.MAX_SAFE_INTEGER;
  //     while (left < right) {
  //       const mid = Math.floor(left + (right - left) / 2);
  //       if ((mid * mid) === x) {
  //         return mid;
  //       } else if ((mid * mid )> x) {
  //         right = mid ;
  //       } else {
  //         left = mid + 1
  //       }
  //     }
  //     return left - 1;
  //   }
  /* Better one */
  /** As in the above approach the time taken is O(logn) we can optimize this to O(n) Linear approach
   * can get the solution
   * O(n) ==> W.C
   * O(1) ===> B.C
   * O(n/2)== O(n) ===> A.C
   * */

  let count = 0;
  for (let i = 1; i < x; i++) {
    if (i * i > x) {
      break;
    } else {
      count += 1;
    }
  }
  return count;
}

const resSqrt = sqrt(2);
console.log('Square root of Given Number : ', resSqrt);

function bestVersion(arr) {
  /* Base Condition */
  if (!arr.length) return -1;
  /* Brute Force Solution */
  /**
   * As a brute force solution i will check for each and element as it as Linear approach
   * O(n) ==> W.C
   * O(1) ===> B.C
   * O(n/2) ==> O(n) ===> A.C
   * */

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 1) {
  //       return i;
  //     }
  //   }
  //   return -1;

  /* Using Binary search */
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === 1) {
      if (arr[mid - 1] === 1) {
        right = mid - 1;
      } else {
        return mid;
      }
    } else if (
      arr.reduce((sum, arr, i) => {
        if (mid > i) {
          return (sum += arr[i]);
        } else {
          return sum;
        }
      }, 0) > 1
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const getBestVersion = bestVersion([0, 0, 0, 1, 1, 1, 1, 1, 1]);
console.log('Best Version of the software : ', getBestVersion);

function perfectSquare(n) {
  /* Brute Force Solution */
  /**
   * As a brute force solution i will check for each and element as it as Linear approach
   * O(n) ==> W.C
   * O(1) ===> B.C
   * O(n/2) ==> O(n) ===> A.C
   * */
  if (n <= 0) return false;
  for (let i = 1; i <= Math.ceil(n/2); i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}

const isPerfectSquare = perfectSquare(15);
console.log('Given Number is a Perfect Square : ', isPerfectSquare);
