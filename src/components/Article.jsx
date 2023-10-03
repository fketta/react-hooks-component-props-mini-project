import React from 'react';
import MinutesToRead from './MinutesToRead';

const Article = ({ title, date, preview }) => {

    const formattedDate = date || "January 1, 1970"; 

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <MinutesToRead time={calculateMinutesToRead(preview)} />
    </article>
  );
};

const calculateMinutesToRead = (preview) => {
  // Calculate minutes to read based on some logic (you can define your own logic here)
  // For demonstration, let's say 1 word takes 0.2 seconds to read.
  const wordsPerMinute = 300; // Average reading speed in words per minute
  const words = preview.split(' ').length; // Calculate words in the preview
  const minutesToRead = Math.ceil(words / wordsPerMinute);
  return minutesToRead;
};

export default Article;