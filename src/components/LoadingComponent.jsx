import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

export default function LoadingComponent() {
    return (
        <div>
            <div class="absolute bottom-0 left-0 right-0 top-0 flex justify-center place-items-center z-50 w-full h-screen">
                <SyncLoader color="#F8C400" className="" />
            </div>
        </div>
    )
}
