import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TwitterContext } from '../../context/TwitterContext';
import checkMark from "../../assets/check.png";

const style = {
    wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
    title: `font-semibold text-xl mb-6`,
    closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
};

const FinishedState = () => {

    const router = useRouter();

    const { getCurrentUserDetails } = useContext(TwitterContext);

    useEffect(() => {
      getCurrentUserDetails();
    }, [])
    

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                Minting Successful
            </div>

            <Image src={checkMark} alt="checkmark" height={100} width={100} />

            <div className={style.closeButton} onClick={() => router.push("/")}>
                Close
            </div>
        </div>
    );
}

export default FinishedState;