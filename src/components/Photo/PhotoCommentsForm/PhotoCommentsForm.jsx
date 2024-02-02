import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { COMMENT_POST } from '../../../api/api'
import Error from '../../../helper/Error'
import styles from "./PhotoCommentsForm.module.css"

const PhotoCommentsForm = ({id, setComments, single}) => {
  const [comment, setComment] = useState('')
  const {error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    setComment('')
    if (response.ok) setComments((comments) => [...comments, json])
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea className={styles.textarea} id="comment" name='comment' placeholder='Commente' value={comment} onChange={({target}) => setComment(target.value)}/>
      <button className={styles.button}><img src="http://localhost:5173/Assets/enviar.svg" alt="imagem enviar" /></button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm
