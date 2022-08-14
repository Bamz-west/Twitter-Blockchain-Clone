import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTweets from "../components/Profile/ProfileTweets";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-4/5 flex justify-between overflow-y-scroll relative`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] ml-64`,
};

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="fixed">
          <Sidebar />
        </div>

        <div className={style.mainContent}>
          <ProfileHeader />

          <ProfileTweets />
        </div>

        <Widgets />
      </div>
    </div>
  )
}

export default Profile;