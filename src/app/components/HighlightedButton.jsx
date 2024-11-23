"use client";
import { SparkleFillIcon } from '@primer/octicons-react';

const HighlightedButton = ({ textValue }) => {
    return (
        <button
        className="max-h-10 rounded-lg flex items-center gap-2 px-3 py-2 bg-greenButtonBG box-border border-greenButtonBorder border-[2px] text-greenButtonText transition pointer-events-none ">
            {/* Icon */}
            <SparkleFillIcon className="w-5 h-5 text-greenButtonText pointer-events-auto" />
            {/* Text */}
            <span>{textValue}</span>
        </button>
    );
};

export default HighlightedButton;