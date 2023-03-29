import React from "react";
import styles from "@/styles/blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  return (
    <div>
      {props.allBlogs.map((ele) => {
        return (
          <div className={styles.blogItem} key={Math.random.toString()}>
            <Link href={`/blogpost/${ele.slug}`}>
              <h4> {ele.title}</h4>
            </Link>
            <p>{ele.content.substr(0, 200)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata"); // list of all files of directories(blogdata)
  let myFile; // each file
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    console.log(ele);

    myFile = await fs.promises.readFile(`blogdata/${ele}`, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
// export async function getServerSideProps(context) {
//   let data = fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await (await data).json();

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }
