import React from "react";

// // functional component - arrow function
//  WHEN TO USE:
// 1. for smaller components
// 2. resuable components
// 3. presentional components, partially right, we can use HOOKS and specify state

// const About = () => {
//   const message = "hello world";
//   return <h1>Hello About Page - {message}</h1>;
// };

// // const About = () => {
// //   const message = "hello world";
// //   return React.createElement(
// //     "h1",
// //     null,
// //     "I am generating this with createElement"
// //   );
// // };

// // functional component - normal function
// // function About() {
// //   return <h1>Hello About Page</h1>;
// // }

class About extends React.Component {
  render() {
    return <h1>Hello I am class component</h1>;
  }
}

export default About;
