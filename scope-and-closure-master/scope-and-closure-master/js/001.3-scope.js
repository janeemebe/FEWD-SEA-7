// declare a global variable
name = undefined;

var workshop = {
  setWorkshopName: function(workshopName) {
    // assign the global variable name to the parameter workshopName
    name = workshopName;
  },
  logWorkshopName: function() {
    console.log(name);
  }
};

var student = {
  setStudentName: function(studentName) {
    // assign the global variable name to the parameter studentName
    name = studentName;
  },
  logStudentName: function() {
    console.log(name);
  }
};
