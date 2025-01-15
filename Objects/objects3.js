const course = {
  name: "JS",
  price: 999,
  teacher: "Hitesh",
};

const { courseInstructor } = course;
console.log(courseInstructor);

//destructuring
const navbar = ({ company }) => {};
navbar((company = "nimay"));
