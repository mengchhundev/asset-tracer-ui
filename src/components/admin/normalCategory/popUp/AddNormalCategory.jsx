import React, { Fragment, useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import gift from "../../../../assets//icon/gift.svg";
import electronic from "../../../../assets//icon/electronic.svg";
import office from "../../../../assets//icon/office.svg";
import furniture from "../../../../assets//icon/furniture.svg";
import addIcon from "../../../../assets//icon/addIcon.svg";
import { FiSave } from 'react-icons/fi';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import getAllSuperCategores from '../../../../redux/services/SuperCategoryService';
import { setAllSuperCategory } from '../../../../redux/slices/SuperCategorySlice';
import NormalCategoryService from '../../../../redux/services/NormalCategoryService';
import SuperCategoryService from '../../../../redux/services/SuperCategoryService';

function AddNormalCategory(props) {
    const dispatch = useDispatch();
    const organization = sessionStorage.getItem("organization");
    const getOrganizationDetail = JSON.parse(organization)
    const organizationId = getOrganizationDetail.id;
    const orgId = getOrganizationDetail.id;
    const superCategory = useSelector((state) => state.superCategory.dataByIdd);
    const [data,setData]= useState();
    console.log("superCategory",data);

    const getAllSuperCategory = () => {
        SuperCategoryService.getAllSuperCategores().then((res) => {
          if (res?.data?.success) {
            dispatch(setAllSuperCategory(res.data.payload));
          }
        });
      };
      useEffect(()=>{
        getAllSuperCategory()
      },[])
  
      useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            
        }));
      }, []);

      const handleChang=(event)=>{
        const { name, value } = event.target;
        setData((prevData)=>({
            ...prevData,
            [name]: value
        }));
    }
  const [selected, setSelected] = useState(superCategory[0]);
//   console.log("selected",selected.id);
    // selected.map((superCategory)=>{
    //     const superCategoryId=superCategory.id
    // })
  const [query, setQuery] = useState("");

  useEffect(() => {
    setData({
        ...data,
        selected: {
            superCategoryId: selected
        }
    });
}, []);
  const filteredsuperCategory =
  query === ""
    ? superCategory
    : superCategory.filter((item) =>
      item.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    );
const handlesubmit=()=>{
    NormalCategoryService.addNormalCategory(data).then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

}
    return (
        <>
            <div className=" modal">
                <div className=" modal-box relative rounded-lg">
                    <div className="absolute top-7 right-7">
                        <label htmlFor="addnormalCategory">
                            <RiCloseFill className="cursor-pointer h-9 w-9 p-1 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
                        </label>
                    </div>
                    <div className=" flex justify-between">
                        <div className="flex">
                            <img src={gift} className="h-12 rounded-lg w-12 " />
                            <p className="mt-2 flexF items-center font-sp-pro-text-regular text-xl pl-6  text-text-color">
                                Create Super Category
                            </p>
                        </div>
                    </div>
                    <div className=" border border-bg-primary rounded-md p-3 my-3">
                        <div className="flex flex-row gap-4">
                            <div>
                                <p className="text-center">Choose Icon</p>
                                <div className="flex flex- justify-between">
                                    <div className="p-2">
                                        <img src={electronic} className="h-14 rounded-lg w-14 " />
                                    </div>
                                    <div className="p-2 mt-4">
                                        <img src={electronic} className="h-9 rounded-lg w-9 " />
                                    </div>
                                    <div className="p-2 mt-4">
                                        <img src={office} className="h-9 rounded-lg w-9 " />
                                    </div>
                                    <div className="p-2 mt-4">
                                        <img src={furniture} className="h-9 rounded-lg w-9 " />
                                    </div>

                                    <div className="p-2 mt-4">
                                        <img src={addIcon} className="h-9 rounded-lg w-9 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className='pt-2'>

                        <div className='space-y-2'>
                            <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                                <label className='py-1'>Super-Category</label>
                                <Combobox
                                    onChange={setSelected}
                                    className="z-20"
                                >
                                    <div className="relative z-20">
                                        <div className="relative w-full cursor-default overflow-hidden text-left rounded-md">
                                            <Combobox.Input
                                                  className="w-full border-[#E1E9EE] border rounded-lg bg-[#F9FBFF] py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                                                  displayValue={(item) => item.name}
                                                  onChange={(event) => setQuery(event.target.value)}
                                                  placeholder="Super-category" // Add placeholder attribute
                                              />
                                            
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
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
                                                {filteredsuperCategory.length === 0 && query !== "" ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-text-color">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredsuperCategory.map((item,index) => (
                                                        <Combobox.Option
                                                            key={index+1}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                    ? "text-primary bg-custom-yellow-showdow-light"
                                                                    : "text-text-color"
                                                                }`
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                            }`}
                                                                    >
                                                                        {item.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-text-color"
                                                                                }`}
                                                                        >
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
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
                            <div className="z-20 mb-4 md:mb-0 lg:mb-0 xl:mb-0" >
                                <label
                                    htmlFor=""
                                    className="flex text-sm text-text-color font-sp-pro-text-regular py-1"
                                >
                                    Normal Category
                                </label>
                                <input
                                    onChange={handleChang}
                                    name='name'
                                    className=" w-full border-[#E1E9EE] border rounded-lg py-2 pl-3 pr-10 text-sm text-text-color outline-none focus:border-primary"
                                    type="text"
                                    placeholder="Normal category"
                                />
                            </div>
                        </div>
                    </form>


                    <div className="flex justify-end flex-row space-x-4 mt-10">
                        <div className="">
                            <label htmlFor='addnormalCategory'
                                class="rounded-md bg-bg-primary py-2 cursor-pointer px-5 text-sm font-sp-pro-text-medium text-text-color w-full flex items-center">
                                <RiCloseFill className="cursor-pointer h-5 w-5 hover:bg-bg-primary text-secondary text-opacity-70 rounded-full" />
                                <label htmlFor="normalCategory">
                                    &nbsp; Cancel
                                </label>
                            </label>
                        </div>

                        <div className="">
                            <label htmlFor='addnormalCategory'onClick={handlesubmit} class="hover:bg-green hover:bg-opacity-90 rounded-md cursor-pointer bg-green py-2 px-5 text-sm font-sp-pro-text-medium text-white hover:opacity-90 w-full flex items-center">
                                <FiSave className="text-lg" /> &nbsp; Add
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNormalCategory;