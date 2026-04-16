import {Component} from "react";
import Image from "next/image";

export class ProfilePicture extends Component {
    render() {
        return <div
            className="w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-linear-to-tr from-primary via-orange-400 to-yellow-300 shadow-md relative group/avatar">
            <div className="w-full h-full rounded-[10px] bg-white p-px overflow-hidden">
                <Image
                    src="/profile.png"
                    alt="User Avatar"
                    fill
                    sizes="36px"
                    className="object-cover rounded-[9px]"
                />
            </div>
            <div
                className="absolute inset-0 bg-primary/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none"/>
        </div>;
    }
}