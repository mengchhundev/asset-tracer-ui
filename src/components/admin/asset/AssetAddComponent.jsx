import {
  ChevronDownIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import upload from "../../../assets/images/Room/Upload.png";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import ItemComponent from "./filtter/ItemComponent";
import CategoryComponent from "./filtter/CategoryComponent";
import StatusComponent from "./filtter/StatusComponent";
import RoomComponent from "./filtter/RoomComponent";
import { BiSave } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { RiAddBoxFill, RiCloseFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

function AssetAddComponent(props) {
  const [query, setQuery] = useState("");
  //Upload image
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
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

  return (
   <div>
    
   </div>
  );
}

export default AssetAddComponent;
