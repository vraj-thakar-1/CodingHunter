import React from "react";
import * as fs from "fs";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page: {props.myBlog.slug}</h1>
        <hr />
        <div>{props.myBlog.content}</div>
      </main>
    </div>
  );
};

export default Slug;
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let Data = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  let myBlog = JSON.parse(Data);

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}
// export async function getServerSideProps(context) {
//   let data = fetch(
//     `http://localhost:3000/api/getblog?slug=${context.query.slug}`
//   );
//   let blog = await (await data).json();
//   return {
//     props: { blog }, // will be passed to the page component as props
//   };
// }
