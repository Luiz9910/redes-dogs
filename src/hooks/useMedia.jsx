import React, { useEffect, useState } from 'react'

const useMedia = (media) => {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    function changeMatch() {
      const {matches} = matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media]);

  return match;
}

export default useMedia
