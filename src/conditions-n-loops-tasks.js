/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    return a > c ? a : c;
  }
  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    (queen.x === queen.y && king.x === king.y) ||
    queen.x - king.x === Math.abs(king.y - queen.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && (a === b || a === c || b === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */

function convertToRomanNumerals(num) {
  let res = '';
  const newNum = num;

  function convert(n) {
    if (n > 10) {
      for (let i = 10; i < n; i += 10) {
        res += 'X';
        if (n - i < 10) {
          convert(n - i);
        }
      }
    } else if (n === 10) {
      res += 'X';
    } else if (n >= 9) {
      res += 'IX';
    } else if (n >= 5) {
      res += 'V';
      convert(n - 5);
    } else if (n === 4) {
      res += 'IV';
    } else {
      for (let i = 0; i < n; i += 1) {
        res += 'I';
      }
    }
    return res;
  }

  return convert(newNum);
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '-':
        res += 'minus';
        break;
      case '.':
      case ',':
        res += 'point';
        break;

      default:
        res += '';
    }
    if (i !== numberStr.length - 1) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let rev = '';
  for (let i = 0; i < str.length; i += 1) {
    rev += str[str.length - i - 1];
  }
  return str === rev;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      break;
    } else res = -1;
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let i = 0;
  let total = 0;

  let left = 0;

  for (i = 0; i < arr.length; i += 1) total += arr[i];

  for (i = 0; i < arr.length; i += 1) {
    total -= arr[i];

    if (i > 0 && left === total) return i;

    if (i === arr.length - 1) {
      return -1;
    }

    left += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = [];
  for (let i = 0; i < size; i += 1) {
    res[i] = new Array(size);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = size;
  let startColumn = 0;
  let endColumn = size;

  while (startRow < endRow && startColumn < endColumn) {
    for (let i = startColumn; i < endColumn; i += 1) {
      res[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let i = startRow; i < endRow; i += 1) {
      res[i][endColumn - 1] = counter;
      counter += 1;
    }
    endColumn -= 1;

    for (let i = endColumn - 1; i >= startColumn; i -= 1) {
      res[endRow - 1][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let i = endRow; i > startRow; i -= 1) {
      res[i - 1][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }

  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const mx = [];
  const res = matrix;

  for (let i = 0; i < matrix.length; i += 1) {
    mx[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      mx[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      res[i][j] = mx[matrix.length - 1 - j][i];
    }
  }
  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  for (let i = 1; i < arr.length; i += 1) {
    const el = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > el) {
      res[j + 1] = arr[j];
      j -= 1;
    }

    res[j + 1] = el;
  }
  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const stringNumber = String(number);
  let res = '';
  const data = [Number(stringNumber[stringNumber.length - 1])];

  for (let i = stringNumber.length - 2; i >= 0; i -= 1) {
    if (Number(stringNumber[i] < Math.max(...data))) {
      data.push(Number(stringNumber[i]));
      data.sort((a, b) => a - b);

      let j = 0;
      for (j = data.length - 1; j >= 0; j -= 1) {
        if (data[j] === Number(stringNumber[i])) {
          j += 1;
          break;
        }
      }

      for (let k = 0; k < i; k += 1) {
        res += stringNumber[k];
      }

      res += String(data[j]);

      for (let k = 0; k < data.length; k += 1) {
        if (k !== j) {
          res += String(data[k]);
        }
      }
      break;
    } else {
      data.push(Number(stringNumber[i]));
    }
  }
  return Number(res);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
