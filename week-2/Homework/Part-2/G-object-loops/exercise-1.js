
const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  }

  for (const key in studentGrades) {
    if (studentGrades[key]>18) {
     console.log(key.toUpperCase(), studentGrades[key]);
    }
  }

  // Prints
  // TOM - 20
  // ABDUL - 19