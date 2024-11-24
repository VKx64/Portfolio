"use client";
import { CopyIcon, HeartFillIcon, DownloadIcon, MailIcon } from '@primer/octicons-react';

const CustomButton = ({ textValue, iconType }) => {

    const iconMap = {
        copy: CopyIcon,
        download: DownloadIcon,
        mail: MailIcon,
    };

    const Icon = iconMap[iconType] || HeartFillIcon;

    return (
        <button
        className="max-h-10 rounded-lg flex items-center gap-2 px-3 py-2 bg-buttonBG box-border border-buttonborder border-[2px] text-white hover:bg-gray-500 active:bg-green-200 active:border-green-400 transition">
            {/* Icon */}
            <Icon className="w-4.5 h-4.5 text-white" />
            {/* Text */}
            <span>{textValue}</span>
        </button>
    );
};

export default CustomButton;