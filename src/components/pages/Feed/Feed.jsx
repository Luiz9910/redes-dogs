import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import PropTypes from "prop-types"

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;

    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, [500])
        }
      }
    }

    addEventListener("scroll", infiniteScroll);
    addEventListener("wheel", infiniteScroll);

    return () => {
      removeEventListener("scroll", infiniteScroll);
      removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos user={user} page={page} key={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>
      ))}
    </div>
  );
};

Feed.defaultProp = {
  user: 0
}

Feed.prototype = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed;
