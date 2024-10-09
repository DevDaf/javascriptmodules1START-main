
export const printAll = (names, tests, scores) => {
  let header = 'Name';
  let row = '';

  for (let i = 0; i < tests.length; i++) {
    header += '\t' + tests[i];
  }
  console.log(header);

  for (let name = 0; name < names.length; name++) {
    row = names[name];
    for (let score = 0; score < scores[name].length; score++) {
      row += '\t' + scores[name][score];
    }
    console.log(row);
  }
};


