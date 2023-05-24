import { Combobox, Dialog, Listbox, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { BiExpandVertical } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import '../../style/pagination.css'
import { useSelector } from "react-redux";

const fruits = ["Apple", "Orange", "Grape", "Lemon", "Lime", "Blueberry"];
const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" }
];

export default function CategoryComponent() {

    const data = useSelector((state) => console.log(state))

    // Modal 
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [selectedFruit, setSelectedFruit] = useState("Apple");
    const [selected, setSelected] = useState(people[0]);
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    const items = [...Array(33).keys()];

    function Items({ currentItems }) {
        return (
            <div className="items">
                {currentItems && currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
            </div>
        );
    }

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };



    return (
        <main className="h-full overflow-y-auto">
            <div className="mx-5 mt-5 p-10 gap-6 bg-white rounded-3xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
                    <h2 className="text-2xl  text-gray-700 dark:text-border-gray-light font-sp-pro-text-semibold">
                        All Super Category
                    </h2>
                    <button className="bg-primary text-white py-2 px-4 rounded-lg max-w-max">
                        Create New
                    </button>
                </div>
                <div className="grid grid-cols-12 gap-6 mb-8">
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                        <Listbox as="div" value={selectedFruit} onChange={setSelectedFruit}>
                            {({ open }) => (
                                <>
                                    <div className="relative">
                                        <span className="inline-block w-full ">
                                            <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue relative border border-slate-200 bg-bg-main rounded-md text-gray-800">
                                                <span className="block truncate">{selectedFruit}</span>
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
                                                className="border border-gray-300 mt-2 border-slate-200 bg-bg-main rounded-md absolute z-50 min-w-full"
                                            >
                                                {fruits.map((fruit) => (
                                                    <Listbox.Option key={fruit} value={fruit}>
                                                        {({ selected, active }) => (
                                                            <div
                                                                className={`${active
                                                                    ? "text-white bg-indigo-600"
                                                                    : "text-gray-900"
                                                                    } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                            >
                                                                <span
                                                                    className={`${selected ? "font-semibold" : "font-normal"
                                                                        }`}
                                                                >
                                                                    {fruit}
                                                                </span>

                                                                {selected && (
                                                                    <span
                                                                        className={`${active ? "text-white" : "text-indigo-600"
                                                                            } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                    >
                                                                        <svg
                                                                            className="h-5 w-5"
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
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">



                        <Combobox as="div" value={selected} onChange={setSelected}>
                            <div className="relative">
                                <span className="inline-block w-full ">
                                    <Combobox.Input
                                        className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue relative border border-slate-200 bg-bg-main rounded-md text-gray-800"
                                        displayValue={(person) => person.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <BiExpandVertical />
                                    </Combobox.Button>
                                </span>
                                <Transition
                                    as={Fragment}
                                    leave=""
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery("")}
                                >
                                    <Combobox.Options className="border border-gray-300 mt-2 border-slate-200 bg-bg-main rounded-md absolute z-50 min-w-full">
                                        {filteredPeople.length === 0 && query !== '' ? (
                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredPeople.map((person) => (


                                                <Combobox.Option
                                                    key={person.id}
                                                    value={person}
                                                >

                                                    {({ selected, active }) => (
                                                        <div
                                                            className={`${active
                                                                ? "text-white bg-indigo-600"
                                                                : "text-gray-900"
                                                                } cursor-default select-none relative py-2 pl-10 pr-4`}
                                                        >
                                                            <span
                                                                className={`${selected ? "font-semibold" : "font-normal"
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>

                                                            {selected && (
                                                                <span
                                                                    className={`${active ? "text-white" : "text-indigo-600"
                                                                        } absolute inset-y-0 left-0 flex items-center pl-2`}
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
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

                                                </Combobox.Option>

                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>


                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                        <div className="relative w-full focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-border-gray-light focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3">
                        <div className="relative w-full focus-within:text-black border rounded-lg p-2 border-slate-200 bg-bg-main">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                className="w-full pl-10 pr-2 bg-transparent text-gray-700 placeholder-gray-600 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-border-gray-light focus:placeholder-gray-500  focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                    </div>
                </div>


                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-bg-primary text-sidebar">
                                <th className="bg-bg-primary">No</th>
                                <th>Name</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-gray-700">
                            <tr className="font-md text-text-color">
                                <th className="bg-white">1</th>
                                <td>
                                    <div className="flex items-center">
                                        <div className="relative  w-8 h-8 mr-3 rounded-full">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                alt=""
                                                loading="lazy"
                                            />
                                            <div
                                                className="absolute inset-0 rounded-full shadow-inner"
                                                aria-hidden="true"
                                            ></div>
                                        </div>
                                        <div>Electronic</div>
                                    </div>
                                </td>
                                <td>6/10/2020</td>
                                <td>
                                    hi
                                </td>
                            </tr>
                            <tr className="font-md text-text-color">
                                <th className="bg-white">1</th>
                                <td>
                                    <div className="flex items-center">
                                        <div className="relative w-8 h-8 mr-3 rounded-full">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                alt=""
                                                loading="lazy"
                                            />
                                            <div
                                                className="absolute inset-0 rounded-full shadow-inner"
                                                aria-hidden="true"
                                            ></div>
                                        </div>
                                        <div>Electronic</div>
                                    </div>
                                </td>
                                <td>6/10/2020</td>
                                <td>
                                    Hi
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>



                <div className="grid grid-cols-12 px-4 py-5 text-sm text-gray-500 uppercase">
                    <div className="flex items-center col-span-12 md:col-span-6 lg:col-span-3 mt-1">Showing 21-30 of 100</div>
                    <div className="col-span-2"></div>

                    <div id="react-paginate" className="col-span-12 md:col-span-7 ml-auto">
                        <ReactPaginate
                            nextLabel=" >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< "
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>

                </div>


            </div>
        </main>
    );
}
