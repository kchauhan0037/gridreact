import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Categoriescontainer from "./Categoriescontainer";
import Itemcontainer from "./Itemcontainer";
import Footer from "./Footer";

function App() {
  const categories = [
    "All",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Programming Languages",
    "Mobile Application Development",
    "Technology and Tools",
    "Get a Job in a Tech Company",
    "Others",
  ];

  const blogPosts = [
    {
      id: 1,
      image:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      heading: "Introduction to Machine Learning",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
    {
      id: 2,
      image: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
      heading: "Data Backup & Recovery",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
    {
      id: 3,
      image: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
      heading: "Cyber Security",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
    {
      id: 4,
      image: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
      heading: "Big Data Analytics",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
    {
      id: 5,
      image: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
      heading: "Cloud Computing",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
    {
      id: 6,
      image: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      heading: "LAMP Stack Vs MEAN Stack",
      author: "Edyoda",
      date: "23 Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit quos explicabo vero dignissimos. Obcaecati molestiae sint reprehenderit magnam laudantium, eaque, necessitatibus ullam perferendis debitis nobis, unde velit ex nemo.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Categoriescontainer categories={categories} />
      <Itemcontainer blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}

export default App;
