import { useState, useEffect } from "react";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <>
      <div className={styles.hadding}>
        <h1> Hunting Coder</h1>

        <h3> A blog for hunting coder for hunting coder</h3>
      </div>
      {/* <Image
        src={"/home.avif"}
        alt="Home_image"
        width={500}
        height={500}
      ></Image> */}
      <img src={"/home.avif"} alt="Home_image" width={500} height={500}></img>

      <div className={styles.blogs}>
        <h3> Popular Blogs</h3>
        {blogs.map((ele) => {
          return (
            <div className={styles.blogItem}>
              <h4>{ele.title}</h4>
              <p>{ele.content.substr(0, 100) + "..."}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
