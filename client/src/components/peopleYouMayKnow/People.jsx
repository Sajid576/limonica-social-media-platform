import "./people.css";
import { useContext } from "react";
import { Add } from "@material-ui/icons";
import { Box, Button } from "@mui/material";

import axios from "axios";

import { AuthContext } from "../../context/AuthContext";

export default function People({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      await axios.put(`/user/follow`, {
        currentUserId: currentUser._id,
        targetUserId: user._id,
      });
      dispatch({ type: "FOLLOW", payload: user._id });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };
  console.log("people: ", currentUser.followings.includes(user?.id));
  return (
    <li className="sidebarFriend">
      {currentUser.followings.includes(user?._id) == false ? (
        <Box sx={{ flexDirection: "row" }}>
          <img
            className="sidebarFriendImg"
            src={PF + user.profilePicture}
            alt=""
          />
          <span className="sidebarFriendName">{user.username}</span>
          <Button
            align={"right"}
            variant="contained"
            endIcon={<Add />}
            onClick={handleClick}
          >
            {"Follow"}
          </Button>
        </Box>
      ) : null}
    </li>
  );
}
