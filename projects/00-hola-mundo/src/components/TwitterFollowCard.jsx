import { useState } from "react";
import "../css/TwitterFollowCard.css";

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-followButton isFollowing"
    : "tw-followCard-followButton";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <li className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt=""
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{`@${userName}`}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button type="button" className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-buttonText"><b>{text}</b></span>
          <span className="tw-followCard-stopFollowText"><b>Dejar de seguir</b></span>
        </button>
      </aside>
    </li>
  );
}
