import React from 'react';
import { css } from '@emotion/css';
import { marginRight16,searchCardText,recentSearchItem,recent_search_item } from './Emotions.style';



function EmotionStyles() {
  return (
    <div className={marginRight16}>
      <h1>Hello World!</h1>
      <p>This is my component.</p>

      <span
      className={css`
        ${searchCardText};
        ${recentSearchItem};
        ${marginRight16};
      `}
    >
     Hello
    </span>


    <div className={recent_search_item}>
      <h1>Hello, World!</h1>
      <p>This is an example of using the recent_search_item style.</p>
    </div>

    </div>
  );
}

export default EmotionStyles;