import styles from "./App.module.scss";

import Post from "./components/Post/Post";
// import Timeline from "./components/Timeline/Timeline";

import data from "@/data.json";

export default function App() {
  return (
    <main className={styles.app}>
      <div className={styles.app__posts}>
        {data.posts.map((post, id) => (
          <Post
            key={id}
            className={styles.post}
            src={`../public/images/postsImages/${post.src}`}
            alt={post.title}
            date={post.date}
            filters={post.filters}
          >
            {post.title}
          </Post>
        ))}
      </div>
    </main>
  );
}
