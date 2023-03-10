import { css, useTheme } from '@emotion/react';

// TODO: 타입 정의 보충
type BookmarkProps = {
  url?: string;
  title?: string;
  description?: string;
  favicon?: string;
  image?: string;
};

const Bookmark = ({ url, title, description, favicon, image }: BookmarkProps) => {
  const theme = useTheme();
  return (
    <a
      href={url}
      css={css`
        display: flex;
        width: 100%;
        border: 1px solid ${theme.gray};
        height: 100px;
        justify-content: space-between;
        border-radius: 5px;
        margin-bottom: 10px;
      `}
    >
      <div
        css={css`
          max-width: 70%;
          flex: 1;
          padding: 12px 14px;
        `}
      >
        <h3
          css={css`
            margin-top: 0;
            font-size: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            font-size: 12px;
            height: 36px;
            overflow: hidden;
            color: ${theme.gray};
          `}
        >
          {description}
        </p>

        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 6px;
          `}
        >
          <img src={favicon ?? ''} alt={'favicon'} width={16} height={16} />
          <p
            css={css`
              font-size: 12px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `}
          >
            {url}
          </p>
        </div>
      </div>
      <div>
        <img
          src={image as string}
          alt={'bookmark'}
          width={200}
          height={98}
          css={css`
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            @media (max-width: 900px) {
              display: none;
            }
          `}
        />
      </div>
    </a>
  );
};

export default Bookmark;
