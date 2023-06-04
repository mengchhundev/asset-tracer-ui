import { BookmarkIcon, BookmarkSquareIcon, ChevronDownIcon, CloudArrowUpIcon, HomeIcon, TrashIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import upload from '../../../../assets/images/Room/Upload.png';
import { Listbox, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { storage } from "../../../../redux/services/googleAuth/firebase";
import {ref,uploadBytes} from 'firebase/storage'
import { v4 as uuid } from 'uuid';

function AddComponent(props) {
    const createType = ["Sr Room", "Admin Room", "PP Room", "BTB Room", "Koskhobg Room", "PVH Room"];
    const createFloor = ["GF", "F1", "F2", "F3", "F4"];
    // const createBy = ["Hong meng", "Meng hout", "MnoR"];
    const [floor, setSelectedfloor] = useState("Room floor");
    // const [selectedCreate, setSelectedCreate] = useState("Room By");
    const [type, setSelectedRoom] = useState("Room type");
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [selectedFile, setSelectedFile] = useState("");
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    let unique_id = "";
    

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const image = new Image();
                image.onload = () => {
                    setImageDimensions({
                        width: image.width,
                        height: image.height,
                    });
                };
                image.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    }, [selectedFile]);
    const handleUpload = () => {

        unique_id = uuid();
        
        if (selectedFile) {
            const uploadTask = ref(storage, `images/${unique_id}`);
            uploadBytes(uploadTask, selectedFile).then((res) => {
                console.log(res);
            });
        }
    };

    // useEffect(() => {
    //     if (selectedFile) {
    //         const uploadTask = Storage.ref(`images/${selectedFile.name}`).put(selectedFile);
    //         uploadTask.on(
    //             'state_changed',
    //             (snapshot) => {
    //                 // You can track the upload progress here if needed
    //             },
    //             (error) => {
    //                 // Handle any errors during the upload
    //             },
    //             () => {
    //                 // Handle successful upload
    //                 console.log('Image uploaded successfully!');
    //             }
    //         );
    //     }
    // }, [selectedFile]);



    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var userId = decoded.id;
    const [data, setData] = useState();

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            floor,
            type,
            id
        }));
    }, [floor, type]);

    const handleChang = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setSelectedfloor(name === "floor" ? value : floor);
        setSelectedRoom(name === "room" ? value : type);

    };

    const handlesubmit = () => {

    }
    return (

        <>
            <div className="modal" >
                {/* <div className="modal-box" > */}
                <div className="modal-box max-w-4xl bg-white rounded-lg p-5 font-sp-pro-text-regular relative" >
                    <div className="flex justify-between px-5">
                        <div className="flex">
                            <HomeIcon className="h-8 w-8 text-white bg-primary p-2 rounded-lg" />
                            <p className="px-4 text-text-color text-[16px] text-opacity-90 item-center xl:text-[20px] font-sp-pro-text-bold">Room Information</p>
                        </div>
                        <div className="">
                            <label htmlFor="addroom" ><XMarkIcon className="cursor-pointer h-8 w-8 text-text-color hover:bg-bg-primary rounded-full p-1 " /></label>
                            {/* <label htmlFor="addroom" ><XCircleIcon className="cursor-pointer h-7 w-7 text-[#F90000] text-opacity-40 " /></label> */}
                        </div>
                    </div>
                    <div className="md:flex mt-5 sm:flex-row">
                        <div className='xl:w-1/3 md:w-1/2'>
                            <div className="item-center w-full rounded-xl   ">
                                <div style={{ boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)" }} className='block items-center space-y-5 mx-5 p-5 pb-3 rounded-md mb-1'>
                                    <label htmlFor="fileInput" className="browseButton">
                                        <div className=" flex cursor-pointer border border-dashed items-center border-primary h-[210px] justify-center text-center p-3 rounded-lg m-auto">
                                            <div className="">
                                                {selectedFile && (
                                                    <img
                                                        src={URL.createObjectURL(selectedFile)}
                                                        alt="Selected File"
                                                        className={`${imageDimensions.width > imageDimensions.height ? 'w-[300px]' : 'h-auto'} ${imageDimensions.width < imageDimensions.height ? 'h-[195px]' : 'w-auto'} block rounded-md object-center justify-center  items-center`}

                                                    />
                                                )}
                                                {!selectedFile && (
                                                    <>
                                                        <CloudArrowUpIcon className="h-20 w-20 text-blue-200 hover:text-blue-300 m-auto" />
                                                        <p className="fileInfo py-4">Upload Invoice picture, max size 20MB</p>
                                                        
                                                    </>
                                                )}
                                        
                                            </div>
                                        </div>
                                        <input
                                            id="fileInput"
                                            type="file"
                                            onChange={handleFileSelect}
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                    <label htmlFor="fileInput" className="browseButton">
                                        <p className='border w-full p-2 px-4 mt-3 border-black border-opacity-20 rounded-md text-center cursor-pointer hover:bg-bg-primary'>Browse</p>
                                        <input
                                            id="fileInput"
                                            type="file"
                                            onChange={handleFileSelect}
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                </div>

                            </div>
                         
                            <button className="flex w-5/6 py-2 mt-3 shadow-md m-auto bg-blue-200 rounded-sm text-white justify-center" onClick={handleUpload}>Upload</button>
                        </div>
                        <div className="xl:w-2/3 md:w-1/2 ">
                            <div className="  item-center w-full rounded-xl">
                                <div style={{ boxShadow: "0 1px 40px 0 rgb(0 0 0 / 0.06)" }} className=" mx-5 p-5 rounded-md mb-1 text-text-color text-opacity-90 text-xs font-sp-pro-text-regular" >
                                    <div className="xl:flex lg:flex-row justify-between">
                                        <div className="w-full xl:p-2 lg:py-2 p-2" >
                                            <label className="text-xs" htmlFor="">Room Name</label><br />
                                            <input onChange={handleChang} name="name" className="border-[#E1E9EE] h-8 font-sp-pro-text-regular border rounded-md mt-1 text-text-color w-full p-2  outline-none focus:border-primary placeholder-text-color placeholder-opacity-30 text-xs"
                                                type="text"
                                                placeholder="Room Name"
                                            />
                                        </div>
                                        <div className="w-full xl:p-2 lg:py-2 p-2">
                                            <label htmlFor="" className="" >Creat Date</label> <br />
                                            <input onChange={handleChang} name="createdAt" className="border-[#E1E9EE]  font-sp-pro-text-regular border rounded-md mt-1 text-text-color w-full p-2 h-8 outline-none focus:border-primary text-xs" type="date"
                                             
                                            />
                                        </div>

                                    </div>
                                    <div className="xl:flex justify-between">
                                        <div className="w-full xl:p-2 lg:py-2 p-2">
                                            <label htmlFor="" className="" >Room Type</label>
                                            <Listbox as="div" className={"mt-1"} value={type} onChange={setSelectedRoom}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative">
                                                            <span className="inline-block w-full ">
                                                                <Listbox.Button className="border-[#E1E9EE] h-8 border rounded-md block text-xs font-sp-pro-text-regular items-center text-text-color w-full outline-none focus:border-primary">
                                                                    <span className="flex justify-between p-[5px] px-2 truncate ">{type}<ChevronDownIcon className="h-4 w-4 text-gray-500" /></span>
                                                                </Listbox.Button>
                                                            </span>
                                                            <Transition
                                                                show={open}
                                                                leave=""
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options
                                                                    static
                                                                    className="border w-full mt-2 border-slate-200 bg-white rounded-md absolute z-50 "
                                                                >
                                                                    {createType.map((room) => (
                                                                        <Listbox.Option key={room} value={room}>
                                                                            {({ selected, active }) => (
                                                                                <div
                                                                                    className={`${active
                                                                                        ? "text-white bg-primary"
                                                                                        : "text-gray-900"
                                                                                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                                                >
                                                                                    <span
                                                                                        className={`${selected ? "font-medium" : "font-normal"
                                                                                            }`}
                                                                                    >
                                                                                        {room}
                                                                                    </span>

                                                                                    {selected && (
                                                                                        <span
                                                                                            className={`${active ? "text-white" : "text-indigo-600"
                                                                                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                        >
                                                                                            <svg
                                                                                                className="h-4 w-4"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                        <div className="w-full xl:p-2 lg:py-2 p-2">
                                            <label htmlFor="" className="" >Room Floor</label>
                                            <Listbox as="div" className={"mt-1"} name="floor" value={floor} onChange={setSelectedfloor}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative">
                                                            <span className="inline-block w-full ">
                                                                <Listbox.Button className="border-[#E1E9EE] h-8 border rounded-md p-[5px] text-text-color w-full outline-none focus:border-primary">
                                                                    <span className="flex justify-between px-2 truncate">{floor}<ChevronDownIcon className="h-4 w-4 text-gray-500" /></span>
                                                                </Listbox.Button>
                                                            </span>
                                                            <Transition
                                                                show={open}
                                                                leave=""
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options
                                                                    static
                                                                    className="border w-full border-slate-200 bg-white rounded-md absolute z-50 "
                                                                >
                                                                    {createFloor.map((room) => (
                                                                        <Listbox.Option key={room} value={room}>
                                                                            {({ selected, active }) => (
                                                                                <div
                                                                                    className={`${active
                                                                                        ? "text-white bg-primary"
                                                                                        : "text-text-color"
                                                                                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                                                >
                                                                                    <span
                                                                                        className={`${selected ? "font-semibold" : "font-normal"
                                                                                            }`}
                                                                                    >
                                                                                        {room}
                                                                                    </span>

                                                                                    {selected && (
                                                                                        <span
                                                                                            className={`${active ? "text-white" : "text-indigo-600"
                                                                                                } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                                        >
                                                                                            <svg
                                                                                                className=" w-5"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                    </div>
                                    <div className="xl:p-3 lg:py-2 p-2">
                                        <div>
                                            <label htmlFor="" className="" >Description</label>
                                            <textarea onChange={handleChang} name="description" className="border-[#E1E9EE] border rounded-md mt-1 text-text-color p-2 w-full  outline-none focus:border-primary" type="text" id="" cols="20" rows="3"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex space-x-5 p-5 justify-end flex-row w-full">
                                <label htmlFor='addroom' className='border w-1/4 p-2 px-4 border-black border-opacity-20 rounded-md text-center cursor-pointer hover:bg-bg-primary'>Cancel</label>
                                <label htmlFor='addroom' className='border w-1/4 p-2 px-4 border-black border-opacity-20 rounded-md text-center cursor-pointer text-white  bg-primary '>Save</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>

    );
}

export default AddComponent;