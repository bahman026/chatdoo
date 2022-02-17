import React from "react";

function Chat() {
    return (
        <div className={"flex"}>
            <div className={"bg-red-200 sm:w-3/5"}>
                panel 1
            </div>
            <div className={"bg-green-200 w-full"}>
                panel 2
            </div>
        </div>
    );
}

export default Chat;