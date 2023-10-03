import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
    return (
        <main>
          {posts.map(({ id, title, date, preview, minutes }) => (
            <Article
              key={id}
              title={title}
              date={date || "January 1, 1970"}
              preview={preview}
              minutes={minutes}
            />
          ))}
        </main>
      );
    }

export default ArticleList;