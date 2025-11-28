import React from "react";
import { listData } from "@/src/assets/data/listData";

export const List = () => {
    return (
        <div className="box">
            <ul>
                {listData.map((item, index) => (
                    <li key={index}>{item.imageUpload}</li>
                ))}
            </ul>
        </div>
    );
};
