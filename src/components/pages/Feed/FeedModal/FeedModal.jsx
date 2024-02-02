import React, { useEffect } from 'react'
import styles from "./FeedModal.module.css"
import useFetch from '../../../../hooks/useFetch'
import { PHOTO_GET } from '../../../../api/api'
import Error from '../../../../helper/Error'
import Loading from '../../../../helper/Loading/Loading'
import PhotoContent from '../../../Photo/PhotoContent/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch()

  useEffect(() => {
    const {url, options} =PHOTO_GET(photo.id)
    request(url, options)
  }, [photo.id, request])

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal
