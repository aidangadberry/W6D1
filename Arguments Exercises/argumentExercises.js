function argsSum() {
  const nums = Array.from(arguments);
  let sum = 0;
  
  nums.forEach((num) => {
    sum += num;
  });
  
  return sum;
} 

function restSum(...nums) {
  let sum = 0;
  
  nums.forEach((num) => {
    sum += num;
  });
  
  return sum;
}
// ---------------------------------------------------------------
// Function.prototype.myArgsBind = function(context) {
//   const bindArgs = Array.from(arguments);
//   const prevFunc = this;
// 
//   return function(){
//     return prevFunc.apply(context, bindArgs.slice(1));
//   };
// };

// Function.prototype.myArgsBind = function(context) {
//   const bindArgs = Array.from(arguments);
//   const prevFunc = this;
// 
//   return function(){
//     const callArgs = Array.from(arguments);
//     return prevFunc.apply(context, callArgs);
//   };
// };

Function.prototype.myArgsBind = function(context) {
  const bindArgs = Array.from(arguments);
  const prevFunc = this;
  
  return function(){
    const callArgs = Array.from(arguments);
    return prevFunc.apply(context, bindArgs.slice(1).concat(callArgs));
  };
};
// -------------------------------------------------------------------------
Function.prototype.myRestBind = function(context, ...bindArgs) {
  const prevFunc = this;
  
  return function(...callArgs) {
    return prevFunc.apply(context, bindArgs.concat(callArgs));
  };
};
// -------------------------------------------------------------------------

function curriedSum(numArgs) {
  const numbers = [];
  
  const _curriedSum = function(num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      let result = 0;
      numbers.forEach((el) => {
        result += el;
      });
      return result;
    } else {
      return _curriedSum;
    }
  };
  
  return _curriedSum;
}

// const mySum = curriedSum(4);
// console.log(mySum(5)(3));

// -------------------------------------------------------------------------

Function.prototype.myApplyCurry = function(numArgs) {
  const args = [];
  const func = this;
  
  const _myApplyCurry = function(arg) {
    args.push(arg);
    
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _myApplyCurry;
    }
  };
  
  return _myApplyCurry;
};


Function.prototype.mySpreadCurry = function(numArgs) {
  const args = [];
  const func = this;
  
  const _mySpreadCurry = function(arg) {
    args.push(arg);
    
    if (args.length === numArgs) {
      return func(...args);
    } else {
      return _mySpreadCurry;
    }
  };
  
  return _mySpreadCurry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let f1 = sumThree.mySpreadCurry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
console.log(f1 = f1(4)); // [Function]
console.log(f1 = f1(20)); // [Function]
console.log(f1 = f1(6));
