import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
// import { Users } from "../../dummyData";
import People from "../peopleYouMayKnow/People";
import CloseFriend from "../closeFriend/CloseFriend";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getPeopleyouMayKnow } from "../../api/users";

const Users = [];

export default function Sidebar() {
  const { user: currentUser } = useContext(AuthContext);
  const [peoples, setPeoples] = useState([]);

  const getPeoples = async () => {
    try {
      const peoples = await getPeopleyouMayKnow(currentUser);
      console.log("sidebar.js:", peoples);
      setPeoples(peoples);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPeoples();
  }, [currentUser]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
        <h4 className="rightbarTitle">People You May Know </h4>
        <ul className="sidebarFriendList">
          {peoples.map((u) => (
            <People key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
