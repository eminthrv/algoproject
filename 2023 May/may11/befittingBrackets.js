const befittingBrackets = (str) => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
  
    for (let char of str) {
      if (char === '(') {
        count1++;
      } else if (char === ')') {
        if (count1 === 0) {
          return false;
        }
  
        count1--;
      }
      if (char === '{') {
        count2++;
      } else if (char === '}') {
        if (count2 === 0) {
          return false;
        }
  
        count2--;
      }
      if (char === '[') {
        count3++;
      } else if (char === ']') {
        if (count3 === 0) {
          return false;
        }
  
        count3--;
      }
    }
  
    console.log(count2)
    if (count1 === 0 && count2 === 0 && count3 === 0 ) {
      return true;
    }
    return false;
  };


  const befittingBrackets2 = (str) => {
    const stack = [];
    
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    
    for (let char of str) {
      if (char in brackets) {
        stack.push(brackets[char]);
      } else {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  };

//   console.log(befittingBrackets('(){}[](())')) //true
//   console.log(befittingBrackets('({[]})')) //true
//   console.log(befittingBrackets('[][}')) //false
//   console.log(befittingBrackets('{[]}({}')) //false
  console.log(befittingBrackets2('{[(}])')) //false
  



  /*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */