import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMoreHorizontal, FiBell } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiBookmark, BiHash } from "react-icons/bi";
import { HiOutlineMail, HiMail } from 'react-icons/hi';
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { BsBookmarkFill, BsBookmark, BsPerson, BsPersonFill } from "react-icons/bs";
import Modal from "react-modal";

import SidebarOption from "./SidebarOption";
import ProfileImageMinter from "./MintingModal/ProfileImageMinter";
import { TwitterContext } from "../context/TwitterContext";
import { customStyle } from "../lib/constants";

const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col h-screen`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer bg-[#1D9BF0] hover:bg-[#1B8CD8]`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 px-2 cursor-pointer hover:bg-[#333C45] rounded-full`,
    profileLeft: `flex items-center justify-center mt-4 mr-2`,
    profileImage: `h-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899A6]`,
    moreContainer: `flex items-center mt-2`
}

const Sidebar = ({ initialSelectedIcon = "Home" }) => {

    const [selected, setSelected] = useState(initialSelectedIcon);

    const router = useRouter();

    const { currentAccount, currentUser } = useContext(TwitterContext);

    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>

            <div className={style.navContainer}>
                <SidebarOption 
                    Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
                    text="Home"
                    isActive={Boolean(selected === "Home")}
                    setSelected={setSelected}
                    redirect={"/"}
                />
                
                <SidebarOption 
                    Icon={selected === "Explore" ? FaHashtag : BiHash}
                    text="Explore"
                    isActive={Boolean(selected === "Explore")}
                    setSelected={setSelected}
                />
                
                <SidebarOption 
                    Icon={selected === "Notifications" ? FaBell : FiBell}
                    text="Notifications"
                    isActive={Boolean(selected === "Notifications")}
                    setSelected={setSelected}
                />
                
                <SidebarOption 
                    Icon={selected === "Messages" ? HiMail : HiOutlineMail}
                    text="Messages"
                    isActive={Boolean(selected === "Messages")}
                    setSelected={setSelected}
                />
                
                <SidebarOption 
                    Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
                    text="Bookmarks"
                    isActive={Boolean(selected === "Bookmarks")}
                    setSelected={setSelected}
                />
                
                <SidebarOption 
                    Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
                    text="Lists"
                    isActive={Boolean(selected === "Lists")}
                    setSelected={setSelected}
                />
                
                <SidebarOption 
                    Icon={selected === "Profile" ? BsPersonFill : BsPerson}
                    text="Profile"
                    isActive={Boolean(selected === "Profile")}
                    setSelected={setSelected}
                    redirect={"/profile"}
                />
                
                <SidebarOption Icon={CgMoreO} text="More" setSelected={setSelected} />
                
                <div 
                    className={style.tweetButton}
                    onClick={() => router.push(`${router.pathname}?mint=${currentAccount}`)}
                >
                    Mint
                </div>
            </div>

            <div className={style.profileButton}>
                <div className={style.profileLeft}>
                    <img 
                        src={currentUser.profileImage} 
                        alt="profile" 
                        className={currentUser.isProfileImageNft ? `${style.profileImage} smallHex` : style.profileImage}
                    />
                </div>

                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>{currentUser.name}</div>
                        <div className={style.handle}>@{currentAccount.slice(0,6)}...{currentAccount.slice(39)}</div>
                    </div>

                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>

            <Modal
                isOpen={Boolean(router.query.mint)}
                onRequestClose={() => router.back()}
                style={customStyle}
                ariaHideApp={false}
            >
                <ProfileImageMinter />
            </Modal>
        </div>
    );
}

export default Sidebar;