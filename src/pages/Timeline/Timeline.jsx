import styles from "./Timeline.module.scss";

import data from "@/data.json";

import PostTimeline from "@/src/components/Post/PostTimeline/PostTimeline";
import Modal from "@/src/components/Modal/Modal";
import PostDetails from "@/src/components/Post/PostDetails/PostDetails";

import arrowIcon from "@/src/assets/images/icons/arrow_2.svg";
import logo from "@/src/assets/images/logo.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Timeline() {
  const [openPostDetails, setOpenPostDetails] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  function handleOpenPostDetails(id) {
    setSelectedPost(data.posts.find((post) => post.id === id));
    setOpenPostDetails(true);
  }

  const handleClosePostDetails = () => {
    setOpenPostDetails(false);
  };

  ///////////////

  const [index, setIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleGoToLeft = () => {
    if (index > 0) {
      setAnimateOut(true);

      setTimeout(() => {
        setIndex(index - 1);
        setAnimateOut(false);
        setAnimateIn(true);
        setTimeout(() => {
          setAnimateIn(false);
        }, 250);
      }, 250);
    }
  };

  const handleGoToRight = () => {
    if (index < data.posts.length - 1) {
      setAnimateOut(true);

      setTimeout(() => {
        setIndex(index + 1);
        setAnimateOut(false);
        setAnimateIn(true);
        setTimeout(() => {
          setAnimateIn(false);
        }, 250);
      }, 250);
    }
  };

  function handlePostPosition(id) {
    if (id === index - 1) {
      return "Left";
    } else if (id === index) {
      return "Center";
    } else if (id === index + 1) {
      return "Right";
    } else {
      return "";
    }
  }

  return (
    <div className={styles.timeline}>
      {openPostDetails && (
        <Modal
          onClick={handleClosePostDetails}
          className={styles.archives__modal}
          {...(selectedPost.details.length < 280 && { smallText: true })}
        >
          <PostDetails
            src={`/images/postsDetailsImages/${selectedPost.src}`}
            title={selectedPost.title}
            date={selectedPost.date}
            filters={selectedPost.filters}
            links={selectedPost.links}
            className={styles.archives__postDetails}
            onClick={handleClosePostDetails}
          >
            {selectedPost.details}
          </PostDetails>
        </Modal>
      )}
      <Link to="/" className={styles.timeline__link}>
        <img src={logo} alt="Logo"  className={styles.timeline__link__logo}/>
      </Link>
      <div className={styles.timeline__posts}>
        {index === 0 && <div className={styles.timeline__posts__placeholder} />}
        {data.posts
          .filter((post) => [index - 1, index, index + 1].includes(post.id))
          .map((post) => (
            <div
              key={`wrapper-${post.id}`}
              className={`${styles.timeline__posts__postWrapper} ${
                post.id !== index &&
                styles.timeline__posts__postWrapper_periphery
              }`}
            >
              <PostTimeline
                key={post.id}
                src={`/images/postsImages/${post.src}`}
                filters={post.filters}
                // animationDelay={post.id / 64}
                animationDelay={0}
                animateOut={animateOut}
                animateIn={animateIn}
                position={handlePostPosition(post.id)}
                onClick={() => handleOpenPostDetails(post.id)}
              >
                {post.title}
              </PostTimeline>
            </div>
          ))}
        {index === data.posts.length - 1 && (
          <div className={styles.timeline__posts__placeholder} />
        )}
      </div>
      <div className={styles.timeline__realTimeline}>
        <div
          className={`${styles.timeline__realTimeline__line}
          ${index === 0 && styles.timeline__realTimeline__line_mostLeft}
          ${
            index === data.posts.length - 1 &&
            styles.timeline__realTimeline__line_mostRight
          }`}
        ></div>
        <div
          className={styles.timeline__realTimeline__point}
          style={{ opacity: index === 0 && "0" }}
        ></div>
        <div className={styles.timeline__realTimeline__point}></div>
        <div
          className={styles.timeline__realTimeline__point}
          style={{ opacity: index === data.posts.length - 1 && "0" }}
        ></div>
      </div>
      <div className={styles.timeline__date}>
        <svg height="16" width="36">
          <polygon
            points="18,0 36,17 0,17"
            style={{
              fill: "var(--primary)",
            }}
          />
        </svg>
        <p className={styles.timeline__date__text}>
          {data.posts
            .filter((post) => post.id === index)
            .map((post) => post.date.replace("->", "-"))}
        </p>
      </div>
      <div className={styles.timeline__buttons}>
        <button
          onClick={handleGoToLeft}
          className={`${styles.timeline__buttons__button} ${
            index === 0 && styles.timeline__buttons__button_notWorking
          }`}
        >
          <img src={arrowIcon} alt="" />
        </button>
        <button
          onClick={handleGoToRight}
          className={`${styles.timeline__buttons__button} ${
            index === data.posts.length - 1 &&
            styles.timeline__buttons__button_notWorking
          }`}
        >
          <img src={arrowIcon} alt="" className={styles.flip} />
        </button>
      </div>
    </div>
  );
}
