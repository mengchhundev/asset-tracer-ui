import React from 'react';
import false1 from '../assets/images/false.png'
import true1 from '../assets/images/success.png'
import { useNavigate } from 'react-router-dom';
function RegisterPopUpComponent({ setIsShowErr,setIsShowSuc }) {
  let Show = false;
  if(setIsShowErr){
     Show = setIsShowErr;
  }
  if(setIsShowSuc){
     Show = setIsShowSuc;
  }
  // navigator = useNavigate();
  return (
    <>
      {Show && (
        <div onClick={() => setIsShowErr(false)} className="fixed top-0 left-0 font-sp-pro-text-semibold right-0 bottom-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-72 z-10 " pointerEvents= {""} >
            <div className="flex flex-col justify-end">
              <div className="relative w-40 m-auto pb-7">
                <img src={setIsShowErr ? false1 : true1} alt="Signup Picture" className="w-full" />
              </div>
              <p className={`text-3xl ${setIsShowErr ? 'text-errPopup_color' : 'text-sucPopup_color'} mb-2`}>
                {setIsShowErr ? 'Ooop...' : 'Success'}
              </p>
              <p className="text-lg font-sp-pro-text-regular text-text-color mt-6">
                {setIsShowErr ? 'This email has already exist!' : 'Your submission was successful!'}
              </p>
              <button
                onClick={setIsShowErr ? () => setIsShowErr(false): () => setIsShowSuc(false)}
                className={`${setIsShowErr ? 'bg-errPopup_color' : 'bg-sucPopup_color'} text-white  mt-14 py-2 px-4 bg-bl rounded-2xl`}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterPopUpComponent;