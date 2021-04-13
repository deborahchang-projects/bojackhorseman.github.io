function getStudents(sort) {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((students) => showStudents(students.results, sort));
}

function showStudents(students, sort) {
  const studentsDiv = document.querySelector(".student-container");
  let studentTemplate = [];
  if (sort === "age") {
    students.sort(function (a, b) {
      return a.dob.age - b.dob.age;
    });
  } else if (sort === "last-name") {
    students.sort(function (a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      } else if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
  }
  students.forEach((student) => {
    studentTemplate.push(
      `<div class="student">
        <img src="${student.picture.medium}">
        <p class="student-name">${student.name.last}, ${student.name.first}</p>
        <p>${student.email}</p>
        <p>address: ${student.location.street.number} ${student.location.street.name}</p>
        <p>age: ${student.dob.age}</p>
      </div>`
    );
  });
  studentsDiv.innerHTML = studentTemplate.join("");
}

function sortStudents() {
  let value = document.getElementById("select-sort").value;
  if (value) {
    getStudents(value);
  }
}

window.onload = function () {
  getStudents();
};
