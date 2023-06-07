import React, { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import trash_ico from "../../assets/images/trash.png"
import { useSelector } from 'react-redux';
import RoomSlice from '../../redux/slices/RoomSlice';
import RoomService from '../../redux/services/RoomService';


function DeletemodalComponent(props) {
    const deleteData = useSelector(state => state.room.deleteRoom);
    console.log(deleteData);
    const [data, setData] = useState({ roomId: "", organizationId: "" });
    // const roomId = deleteData.di
    const handlerClick = () => {
        RoomService.deleteRoom(roomId)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    console.log("", data);
    return (
        <>

            <div className="modal">
                <div className="modal-box relative">
                    <div className='absolute right-4 top-3 hover:bg-bg-primary w-8 h-8 flex justify-center rounded-full items-center cursor-pointer'>
                        <label htmlFor="delete_org" ><RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" /></label>
                    </div>
                    <div className="flex justify-start">
                        <div>
                            <img src={trash_ico} width={55} height={55} className="inline-block" />
                        </div>
                        <div className="pl-3 leading-none">
                            <h3 className="font-sp-pro-text-bold text-xl">Delete</h3>
                            <p className="pt-1 py-5">
                                Are you sure want to delete this post?
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-4">
                        <label
                            htmlFor='delete_org'
                            className="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color text-opacity-90 border border-[#D0D5DD] flex justify-center items-center gap-1"
                        >
                            Cancel
                        </label>
                        <button
                            onClick={handlerClick}
                            type="submit"
                            className="bg-opacity-10 rounded-md cursor-pointer bg-reject border border-reject py-2 px-5 text-sm font-sp-pro-text-medium text-reject flex justify-center items-center gap-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeletemodalComponent;