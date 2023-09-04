import "./css/App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernández ",
    isFollowing: true,
  },
  {
    userName: "vxnder",
    name: "Vanderheart ",
    isFollowing: false,
  },
];

function App() {
  return (
    <ul className="tw-followCard-container">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </ul>
  );
}

export default App;
