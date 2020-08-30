import React, { FC, memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

interface Props {
  content: string;
}

const PostCardContent: FC<Props> = memo(({ content }) => (
  <div>
    {content.split(/(#[^\s]+)/g).map((v) => {
      // if (v.match(/#[^\s]+/)) {
      if (v[0] === '#') {
        return (
          <Link
            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} // 페이지와 파라미터
            as={`/hashtag/${v.slice(1)}`} // 페이지에 대한 링크설정
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
));

export default PostCardContent;
