import { ChevronDownIcon, HomeIcon, XCircleIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';
import upload from '../../../assets/images/Room/Upload.png';
import { Combobox, Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
function AssetAddComponent(props) {
    const room = [
        { id: 1, name: "Sr Room" },
        { id: 1, name: "Admin Room" },
        { id: 1, name: "PP Room" },
        { id: 1, name: "BTB Room" },
        { id: 1, name: "Koskhobg Room" }]
    const category = [
        { id: 1, name: "Electronic" },
        { id: 2, name: "Vehicle" },
        { id: 3, name: "Furniture" }]
    const status = [
        { id: 1, name: "in stock" },
        { id: 1, name: "donete" },
        { id: 1, name: "in use" },]
    const item = [
        { id: 1, name: "Computer" },
        { id: 2, name: "Table" },
        { id: 3, name: "char" },
    ];
    const [selectedRoom, setSelectedRoom] = useState(room[0]);
    const [selectedfloor, setSelectedfloor] = useState("Room floor");
    const [selecteditem, setSelecteditem] = useState(item[0]);
    const [selectedCategory, setSelectedCategory] = useState(category[0]);
    const [selectedStatus, setSelectedsStatus] = useState(status[0]);
    const [query, setQuery] = useState("");

    const filteredItem =
        query === ""
            ? item
            : item.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    const filteredCategory =
        query === ""
            ? category
            : category.filter((c) =>
                c.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    const filteredRoom =
        query === ""
            ? room
            : room.filter((r) =>
                r.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    const filteredStatus =
        query === ""
            ? status
            : status.filter((r) =>
                r.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    return (
        <>
            <div className="">
                <div className="bg-white p-5 rounded-lg" >
                    <div className=' text-xl font-sp-pro-text-bold text-text-color text-opacity-90'>
                        <p>Add Asset</p>
                    </div>
                    <hr className='border border-text-color border-opacity-20 my-2' />
                    <div className='md:flex sm:flex-row'>
                        <div className='xl:w-7/12 md:w-6/12 sm:w-full'>
                            <div className='xl:flex mt-1 w-full​ flex-row'>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3">
                                    <label htmlFor="" className="" >Select Item</label>
                                    <Combobox value={selecteditem} onChange={setSelecteditem}>
                                        <div className="relative z-20">
                                            <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                                <Combobox.Input
                                                    className="bg-bg-main border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary"
                                                    displayValue={(person) => person.name}
                                                    onChange={(event) => setQuery(event.target.value)}
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-text-color"
                                                        aria-hidden="true"
                                                    />
                                                </Combobox.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery("")}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredItem.length === 0 && query !== "" ? (
                                                        <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredItem.map((person) => (
                                                            <Combobox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                        ? "bg-hover-yellow text-text-color"
                                                                        : "text-text-color"
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                                }`}
                                                                        >
                                                                            {person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                                    }`}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>
                                </div>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3" >
                                    <label htmlFor="">Owner</label><br />
                                    <input className="border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary" type="text"
                                        placeholder="Room Name"
                                    />
                                </div>
                            </div>
                            <div className='xl:flex mt-3 w-full​ md:flex-row'>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3" >
                                    <label htmlFor="">Label Code</label><br />
                                    <input className="border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary" type="text"
                                        placeholder="Label code"
                                    />
                                </div>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3" >
                                    <label htmlFor="">Serial Code</label><br />
                                    <input className="border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary" type="text"
                                        placeholder="Serial Code"
                                    />
                                </div>
                            </div>
                            <div className='xl:flex mt-3 w-full​ md:flex-row'>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3">
                                    <label htmlFor="" className="" >Select Category</label>
                                    <Combobox value={selectedCategory} onChange={setSelectedCategory}>
                                        <div className="relative z-40">
                                            <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                                <Combobox.Input
                                                    className="bg-bg-main border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary"
                                                    displayValue={(person) => person.name}
                                                    onChange={(event) => setQuery(event.target.value)}
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-text-color"
                                                        aria-hidden="true"
                                                    />
                                                </Combobox.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery("")}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredCategory.length === 0 && query !== "" ? (
                                                        <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredCategory.map((person) => (
                                                            <Combobox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                        ? "bg-hover-yellow text-text-color"
                                                                        : "text-text-color"
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                                }`}
                                                                        >
                                                                            {person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                                    }`}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>
                                </div>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3">
                                    <label htmlFor="" className="" >Select Status</label>
                                    <Combobox value={selectedStatus} onChange={setSelectedsStatus}>
                                        <div className="relative  z-20">
                                            <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                                <Combobox.Input
                                                    className="bg-bg-main border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary"
                                                    displayValue={(person) => person.name}
                                                    onChange={(event) => setQuery(event.target.value)}
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-text-color"
                                                        aria-hidden="true"
                                                    />
                                                </Combobox.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery("")}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredStatus.length === 0 && query !== "" ? (
                                                        <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredStatus.map((person) => (
                                                            <Combobox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                        ? "bg-hover-yellow text-text-color"
                                                                        : "text-text-color"
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                                }`}
                                                                        >
                                                                            {person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                                    }`}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>
                                </div>

                            </div>
                            <div className='xl:flex w-full​ md:flex-row'>
                                <div className="xl:w-1/2 md:w-full md:p-3 sm:pt-3">
                                    <label htmlFor="" className="" >Selected Room</label>
                                    <Combobox value={selectedRoom} onChange={setSelectedRoom}>
                                        <div className="relative  z-20">
                                            <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                                <Combobox.Input
                                                    className="bg-bg-main border-[#E1E9EE] border rounded-lg mt-1 text-text-color py-2 px-4 w-full outline-none focus:border-primary"
                                                    displayValue={(person) => person.name}
                                                    onChange={(event) => setQuery(event.target.value)}
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-text-color"
                                                        aria-hidden="true"
                                                    />
                                                </Combobox.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery("")}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredRoom.length === 0 && query !== "" ? (
                                                        <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredRoom.map((person) => (
                                                            <Combobox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                        ? "bg-hover-yellow text-text-color"
                                                                        : "text-text-color"
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                                }`}
                                                                        >
                                                                            {person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                                    }`}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>
                                </div>
                            </div>
                         
                            <div className="md:p-3 sm:pt-3 w-full">
                                <h1 className="text-[14px]  text-text-color font-sp-pro-text-regular">Descripction</h1>
                                <textarea className="w-full bg-bg-main rounded-md  pl-3 pr-3 text-sm leading-5 text-text-color focus:outline-yellow " rows="5" cols="50"></textarea>
                            </div>
                        </div>
                        <div className='xl:w-5/12 md:w-6/12 sm:full'>
                            <div className="w-full">
                                <div className="md:p-3 md:m-5 item-center w-full ">
                                    <div className='space-y-5 shadow px-10 md:py-20 py-5 rounded-md mb-1'>
                                        <div className='border border-dashed items-center block justify-center text-center p-3 border-bg-primary-strock rounded-lg'>
                                            <div>
                                                <img className="block m-auto " src={upload} alt="" />
                                                <p className='mt-3 text-xs'>Upload Invoice picture, max size 20MB</p>
                                                <button className='shadow-sm rounded-md border border-bg-primary px-5 py-1.5 my-2 '>Browse</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='shadow-sm rounded-md border border-none bg-reject-light w-full text-reject px-5 py-1.5 my-2 '>Remove</button>
                                    </div>
                                </div>
                                <div className="flex mt-3 justify-end flex-row w-full">
                                    <div className="bg-slate-500 cursor-pointer  w-3/12 p-2  rounded-lg flex justify-center">
                                        <button className="flex justify-around text-white font-sp-pro-text-regular items-center  text-[14px] ">Cancel</button>
                                    </div>
                                    <div className="bg-primary cursor-pointer bg-opacity-20 ml-6 w-3/12 p-2 rounded-lg flex justify-center">
                                        <button className="flex  justify-around text-primary font-sp-pro-text-regular items-center text-[14px]">Save</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default AssetAddComponent;
