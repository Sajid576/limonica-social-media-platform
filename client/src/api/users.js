import axios from "axios";

export const getFriends = (currentUser) => {
  return new Promise(async (resolve, reject) => {
    const friendList = await axios.get("/user/friends/" + currentUser._id);
    if (!friendList) reject();
    resolve(friendList?.data?.data);
  });

  //setFriends(friendList.data.data);
};

export const getPeopleyouMayKnow = (currentUser) => {
  return new Promise(async (resolve, reject) => {
    const friendList = await axios.get("/user/allUsers");
    if (!friendList || friendList.length === 0) {
      reject();
    }
    let peoples = friendList?.data?.data.filter(
      (friend) => friend._id !== currentUser._id
    );
    resolve(peoples);
  });
};

// export const follow = (currentUser, targetUser) => {};

// export const unfollow = (currentUser, targetUser) => {};
