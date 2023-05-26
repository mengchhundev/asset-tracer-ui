import React from 'react';
import false1 from '../../../assets/images/false.png'
import true1 from '../../../assets/images/success.png'
import { useNavigate } from 'react-router-dom';

function RegisterPopUpComponent({ setIsShowErr, setIsShowSuc }) {
  let Show = false;
  const navigator = useNavigate();
  const [isSuccess, setIsSuccess] = useNavigate()

  if (setIsShowErr) {
    Show = setIsShowErr;
  }
  if (setIsShowSuc) {
    Show = setIsShowSuc;
  }

  return (
    <>
      {Show && (
        <div onClick={() => setIsShowErr(false)} className="fixed top-0 left-0 font-sp-pro-text-semibold right-0 bottom-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 py-10 w-72 z-10 " pointerEvents={""} >
            <div className="flex flex-col justify-end">
              <div className="relative w-40 m-auto pb-7">
                <img src={setIsShowErr ? false1 : true1} alt="Signup Picture" className="w-32 m-auto" />
              </div>
              <p className={`text-2xl text-center ${setIsShowErr ? 'text-custom-red' : 'text-custom-blue'}`}>
                {setIsShowErr ? 'Ooop...' : 'Success'}
              </p>
              <p className="text-sm font-sp-pro-text-regular text-center text-text-color mt-3">
                {setIsShowErr ? 'This email has already exist!' : 'You have registered successfully! Please check your email'}
              </p>
              <button
                onClick={setIsShowErr ? () => setIsShowErr(false) : () => setIsShowSuc(false)}
                className={`${setIsShowErr ? 'bg-custom-red' : 'bg-custom-blue'}  text-white  mt-8 py-2 px-4 bg-bl rounded-2xl`}
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