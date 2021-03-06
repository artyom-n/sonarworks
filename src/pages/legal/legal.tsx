import React, { useState, useEffect } from 'react';
import style from "./legal.module.scss";
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Legal = () => {

  const [title, setTitle] = useState<string | undefined>()
  const [content, setContent] = useState<string | undefined>()

  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`https://www.sonarworks.com/api/legal/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
  })

  return (
    !title || !content ?
      (
        <div
          className={style.loading}>
          Loading...
        </div>
      ) : (
        <>
          <Nav />
          <section className={style.legal}>
            <h3
              className={style.title}
            >
              {title}
            </h3>
            <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: content }}
            />
          </section>
          <Footer />
        </>
      )
  )
}

export default Legal;
