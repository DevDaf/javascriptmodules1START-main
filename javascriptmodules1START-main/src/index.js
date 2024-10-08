"use strict";

import { averageForTest, averageForStudent } from './averages.js';
import { printAll } from './display.js';
import { randomSelect } from './randomSelect.js';

export const randomSelect = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};


const astronauts = ['Fox', 'Turtle', 'Cat', 'Hippo', 'Dog'];
const testTitles = ['Math', 'Fitness', 'Coding', 'Nav', 'Communication'];
const scores = [
  [95, 86, 83, 81, 76],
  [79, 71, 79, 87, 72],
  [94, 87, 87, 83, 82],
  [99, 77, 91, 79, 80],
  [96, 95, 99, 82, 70]
];


const prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut', 'select the next spacewalker'];

prompts.forEach((prompt, i) => {
  console.log(prompt);
  if (i === 0) {
    printAll(astronauts, testTitles, scores);
  } else if (i === 1) {
    testTitles.forEach((testTitle, j) => {
      const avg = averageForTest(j, scores);
      console.log(`${testTitle} test average = ${avg}%.`);
    });
  } else if (i === 2) {
    astronauts.forEach((astronaut, j) => {
      const avg = averageForStudent(j, scores);
      console.log(`${astronaut}'s test average = ${avg}%.`);
    });
  } else {
    const walker = randomSelect(astronauts);
    console.log(`${walker} is the next spacewalker.`);
  }
});
