import { css } from '@emotion/css';
import { style } from './style';

export const marginRight16 = css`
  margin-right: 16px;
  font-size: 1.2rem;
  background-color:lightpink;
  color: #333;
  border-radius: 4px;
  padding: 8px 16px;
  width:60%;
  margin:20px auto;
`;

export const searchCardText = css`
  color: red !important;
  font-size: 1.2rem;
`;

export const recentSearchItem = css`
  background-color: yellow !important;
  color: #333;
  border-radius: 4px;
  margin:40px !important;
`;
export const recent_search_item = css({
    'body.spg-dark &': {
      color: `${style.color.base.gray[11].value}`,
    },
    color: style.color.base.black.value,
    fontSize: '13px',
    letterSpacing: 0,
  });

