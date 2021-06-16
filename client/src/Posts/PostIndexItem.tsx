import React from "react";
import moment from "moment";
import { Card, Bars } from "./styles";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faThumbsUp,
  faHeart,
  faLaugh,
  faAngry,
  faSadCry,
  faSurprise,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

interface IIconMap {
  [key: string]: IconDefinition;
}

const iconMap: IIconMap = {
  likes: faThumbsUp,
  hearts: faHeart,
  laughs: faLaugh,
  cries: faSadCry,
  surprises: faSurprise,
  angry: faAngry,
  comments: faComment,
};

export const PostIndexItem = ({ post }: any) => {
  const [truncated, setTruncate] = React.useState(true);

  function handleTruncate(event: React.UIEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTruncate((prev) => !prev);
  }

  return (
    <Card truncated={truncated} sentiment={post.sentiment}>
      <FontAwesomeIcon icon={faBookmark} />
      <section className="header">
        <div className="avatar">
          <img
            className="rounded-cicle"
            src={post.img}
            alt={`${post.author}`}
          />
        </div>
        <div>
          <p>{post.author}</p>
          <span>
            <small>{moment(post.date).format("D MMMM YYYY [at] h:mm a")}</small>
            <small>{post.media}</small>
          </span>
        </div>
      </section>
      <section className="post-body">
        <section className="post-content">
          <p>{post.post}</p>
          <a href="/" onClick={(event) => handleTruncate(event)}>
            {truncated ? "See More..." : "See Less"}
          </a>
        </section>
        <div className="post-sentiment">{post.sentiment}</div>
        <Impact impact={post.impact} />
      </section>
      <section className="post-footer">
        <ul>
          {[
            "likes",
            "hearts",
            "laughs",
            "cries",
            "surprises",
            "angry",
            "comments",
          ].map((type: string) => {
            if (type in post.data) {
              return (
                <li key={`${post.id}-${type}`}>
                  <FontAwesomeIcon icon={iconMap[type]} /> {post.data[type]}
                </li>
              );
            }
          })}
        </ul>
      </section>
    </Card>
  );
};

type ImpactProps = {
  impact: number;
};

export const Impact = ({ impact }: ImpactProps) => {
  return (
    <Bars impact={impact}>
      <div className="bar first-bar"></div>
      <div className="bar second-bar"></div>
      <div className="bar third-bar"></div>
      <div className="bar fourth-bar"></div>
      <div className="bar fifth-bar"></div>
    </Bars>
  );
};
