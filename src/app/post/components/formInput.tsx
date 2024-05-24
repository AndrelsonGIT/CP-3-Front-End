import React from 'react';
import {element} from "prop-types";

interface FormInputProps{
    inputType: string;
    text: string;
    elementName: string;
}

export const FormInput: React.FC<FormInputProps> = ({inputType, text, elementName}) => {

    return (
        <div className="flex flex-col w-52 sm:w-80 md:w-96 ">
            <label htmlFor={elementName}>{text}</label>
            <input type={inputType} name={elementName} className="border-2 border-green-300"/>
        </div>
    );
}
1