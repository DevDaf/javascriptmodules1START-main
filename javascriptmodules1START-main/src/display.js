"use strict";

export const printAll = (names, tests, scores) => {
  let header = 'Name';
  let row = '';

  tests.forEach(test => {
    header += '\t' + test;
  });
  console.log(header);

  names.forEach((name, nameIndex) => {
    row = name;
    scores[nameIndex].forEach(score => {
      row += '\t' + score;
    });
    console.log(row);
  });
};