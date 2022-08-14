import { useContext } from "react";
import { TwitterContext } from "../context/TwitterContext";
import Image from "next/image";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Home/Feed";
import Widgets from "../components/Widgets";
import metamaskLogo from "../assets/metamask.png";
import errorImg from "../assets/error.png";

const style = {
  wrapper: `flex justify-center w-screen select-none bg-[#15202B] text-white`,
  content: `max-w-[1400px] w-4/5 flex justify-between`,
  loginContainer: `w-full h-screen flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`
}

const Home = () => {

  const { appStatus, connectWallet } = useContext(TwitterContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetamaskFound;

      case "error":
        return error;
    
      default:
        return loading;
    }
  }

  const userLoggedIn = (
    <div className={`${style.content} relative`}>
      <div className="fixed">
        <Sidebar />
      </div>

      <Feed />

      <Widgets />
    </div>
  );

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image height={200} width={200} src={metamaskLogo} />

      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>

      <div className={style.loginContent}>Connect to Wallet</div>
    </div>
  );

  const noMetamaskFound = (
    <div className={style.loginContainer}>
      <Image height={200} width={200} src={metamaskLogo} />

      <div className={style.loginContent}>
        <a 
          href={`https://metamask.io/download.html`}
          target="_blank"
          rel="noreferrer"
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your browser
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={style.loginContainer}>
      <Image height={250} width={250} src={errorImg} />

      <div className={style.loginContent}>
        An error occured. Please try again later or use another browser
      </div>
    </div>
  );

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>
        Loading...
      </div>
    </div>
  );

  return (
    <div className={style.wrapper}>
      {app(appStatus)}
    </div>
  );
}

export default Home;