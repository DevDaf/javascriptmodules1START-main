export const averageForStudent = (nameIndex, scores) => {
    const sum = scores[nameIndex].reduce((acc, score) => acc + score, 0);
    return sum / scores[nameIndex].length;
};

export const averageForTest = (testIndex, scores) => {
    const sum = scores.reduce((acc, studentScores) => acc + studentScores[testIndex], 0);
    return sum / scores.length;
};
