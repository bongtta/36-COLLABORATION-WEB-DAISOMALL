/** @jsxImportSource @emotion/react */
import * as T from './TodayCard.style';
import { BookmarkIcon } from '@assets/svgs';

interface TodayCardProps {
  imageUrl: string;
  profileImage: string;
  username: string;
  title: string;
  views: number;
}

const TodayCard = ({
  imageUrl,
  profileImage,
  username,
  title,
  views,
}: TodayCardProps) => (
  <div css={T.wrapper}>
    <div css={T.imageWrapper}>
      <img src={imageUrl} alt="대표 이미지" css={T.mainImage} />
    </div>

    <div css={T.contentArea}>
      <div css={T.topRow}>
        <div css={T.profileArea}>
          <img src={profileImage} alt={username} css={T.profileImage} />
          <span css={T.username}>{username}</span>
        </div>
        <BookmarkIcon css={T.bookmarkIcon} />
      </div>

      <p css={T.title}>{title}</p>

      <div css={T.viewRow}>
        <span css={T.viewCount}>{views.toLocaleString()}명</span>
        <span css={T.viewText}>봤어요</span>
      </div>
    </div>
  </div>
);

export default TodayCard;
