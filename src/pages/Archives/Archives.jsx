import styles from "./Archives.module.scss";

import data from "@/data.json";

import Button from "@/src/components/Button/Button";
import Post from "../../components/Post/Post";
import Modal from "@/src/components/Modal/Modal";
import PostDetails from "@/src/components/Post/PostDetails/PostDetails";
import FiltersMenu from "./FiltersMenu/FiltersMenu";

import filtersIcon from "@/src/assets/images/icons/filters.svg";

import { useState } from "react";

export default function Archives() {
  const [openPostDetails, setOpenPostDetails] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [filtersMenu, setOpenFiltersMenu] = useState(false);

  function handleOpenPostDetails(id) {
    setSelectedPost(data.posts.find((post) => post.id === id));
    setOpenPostDetails(true);
  }

  const handleClosePostDetails = () => {
    setOpenPostDetails(false);
  };

  const handleOpenFiltersMenu = () => {
    setOpenFiltersMenu(true);
  };

  const handleCloseFiltersMenu = () => {
    setOpenFiltersMenu(false);
  };

  const [selectedFilters, setSelectedFilters] = useState({
    classes: new Set(),
    options: new Set(),
  });

  const noFiltersSelected =
    selectedFilters.classes.size === 0 && selectedFilters.options.size === 0;

  const handleClick = (section, filter) => {
    setSelectedFilters((prev) => {
      const updated = new Set(prev[section]);
      if (updated.has(filter)) {
        updated.delete(filter);
      } else {
        updated.add(filter);
      }
      return { ...prev, [section]: updated };
    });
  };

  const handleReset = () => {
    setSelectedFilters({
      classes: new Set(),
      options: new Set(),
    });
  };

  return (
    <div className={styles.archives}>
      {filtersMenu && (
        <Modal
          onClick={handleCloseFiltersMenu}
          className={styles.archives__modal}
          filtersMenu
        >
          <FiltersMenu
            onClick={handleCloseFiltersMenu}
            handleClick={handleClick}
            selectedFilters={selectedFilters}
            noFiltersSelected={noFiltersSelected}
            handleReset={handleReset}
          ></FiltersMenu>
        </Modal>
      )}
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
            className={styles.archives__postDetails}
            onClick={handleClosePostDetails}
          >
            {selectedPost.details}
          </PostDetails>
        </Modal>
      )}
      <div className={styles.archives__filtersButton}>
        <Button
          src={filtersIcon}
          alt="Filtres"
          color="primary"
          bora={1}
          fontSize={1.25}
          paddingTopBottom={0.75}
          bg="primary-variant"
          bgHover="primary-variant-hover"
          bgActive="primary-variant-active"
          onClick={handleOpenFiltersMenu}
        >
          Filtres
        </Button>
      </div>
      <div className={styles.archives__postsWrapper}>
        <div className={styles.archives__postsWrapper__posts}>
          {data.posts
            .toReversed()
            .filter((post) =>
              noFiltersSelected
                ? true
                : post.filters.some(
                    (filter) =>
                      selectedFilters.classes.has(filter) ||
                      selectedFilters.options.has(filter)
                  )
            )
            .map((post) => (
              <Post
                key={post.id}
                className={styles.post}
                src={`/images/postsImages/${post.src}`}
                date={post.date}
                filters={post.filters}
                animationDelay={post.id / 64}
                onClick={() => handleOpenPostDetails(post.id)}
              >
                {post.title}
              </Post>
            ))}
          <div
            className={styles.archives__postsWrapper__posts__bottomSpacer}
          ></div>
        </div>
      </div>
    </div>
  );
}
