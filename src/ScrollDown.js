import {gsap} from "gsap";

export default function ScrollDown() {
    return (
        <div className="self-center mb-20">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="55"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 30 55"
                xmlSpace="preserve"
            >
                <circle cx="15" cy="12.5" r="3" fill="#fff"/>
                <path
                    id="mouse"
                    fill="#fff"
                    d="M15 0C6.716 0 0 6.717 0 15.002v24.996C0 48.283 6.716 55 15 55c8.284 0 15-6.717 15-15.002V15.002C30 6.717 23.284 0 15 0zm13 39.998C28 47.167 22.168 53 15 53S2 47.167 2 39.998V15.002C2 7.833 7.832 2 15 2s13 5.833 13 13.002z"
                />
            </svg>
        </div>
    );
};