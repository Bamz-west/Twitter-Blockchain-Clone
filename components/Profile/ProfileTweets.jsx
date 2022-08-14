import { useContext } from "react";

import Post from "../Post";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
  {
    displayName: "Bamz",
    userName: "0x8878386Gfj877836gBUOnnznd873676738i198",
    avatar: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z"
  },
]

const ProfileTweets = () => {

  const { currentAccount, currentUser } = useContext(TwitterContext);

  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index} 
          displayName={currentUser.name === "Unnamed" ? `${currentUser.walletAddress.slice(0, 4)}...${currentUser.walletAddress.slice(-4)}` : currentUser.name}
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(-4)}`}
          avatar={currentUser.profileImage}
          text={tweet.tweet}
          isProfileImageNft={currentUser.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets;