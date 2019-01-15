import React from "react";

const SVG = ({
    style = {},
    width = "100%",
    className = "",
    viewBox = "0 0 128 128"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            className={`svg-icon ${className || ""}`}>
            <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path d="M60.72 159.066c0 .768-.383 1.533-1.15 1.533-1.15 0-1.534-1.533-4.601-1.533-1.917 0-3.45 1.15-3.45 3.066 0 4.986 10.735 2.686 10.735 10.354 0 3.449-2.684 6.9-7.669 6.9-3.066 0-6.134-1.15-6.134-2.684 0-.768.383-1.15 1.15-1.15.767 0 2.3 1.535 4.984 1.535 3.067 0 4.602-1.918 4.602-4.602 0-5.367-10.736-2.684-10.736-9.969 0-2.684 2.684-5.752 6.901-5.752 2.685.002 5.368 1.152 5.368 2.302zM71.457 162.133c2.684 0 4.217 1.15 4.217 2.301 0 .385-.383 1.15-1.151 1.15-.767 0-1.15-.766-3.066-.766-3.451 0-4.985 3.066-4.985 6.135 0 2.684 1.534 6.135 4.985 6.135 1.917 0 2.3-.768 3.066-.768.768 0 1.151.383 1.151 1.15 0 .766-1.533 1.916-4.217 1.916-5.368 0-7.669-3.834-7.669-8.434s2.3-8.819 7.669-8.819zM81.042 177.854c0 1.15-.767 1.533-1.534 1.533-.766 0-1.534-.383-1.534-1.533v-14.186c0-.768.768-1.535 1.534-1.535.767 0 1.534.768 1.534 1.535v14.186zm-1.534-21.088c1.15 0 1.917.385 1.917 1.533 0 .768-.768 1.535-1.917 1.535-.766 0-1.534-.768-1.534-1.535 0-1.149.768-1.533 1.534-1.533zM86.026 169.803c0-2.301 1.534-5.369 4.985-4.984 3.067 0 4.217 2.684 4.217 4.984h-9.202zm10.352 2.299c1.534 0 1.917-.766 1.917-1.533 0-4.217-2.684-8.436-7.284-8.436-4.985 0-7.668 4.219-7.668 8.82 0 4.6 2.3 8.434 7.668 8.434 3.45 0 6.901-1.916 6.901-3.451 0-.766-.768-1.148-1.15-1.148-1.151 0-1.917 2.301-5.751 2.301-3.068 0-4.985-2.301-4.985-4.986h10.352v-.001zM100.596 163.668c0-.768.383-1.535 1.15-1.535 1.15 0 1.533.768 1.533 1.535v.766c1.15-1.533 3.068-2.301 4.602-2.301 2.684 0 6.135 1.918 6.135 6.52v9.201c0 1.15-.768 1.533-1.533 1.533-.768 0-1.535-.383-1.535-1.533v-9.201c0-2.684-1.916-3.834-3.834-3.834-1.916 0-3.834 1.15-3.834 3.834v9.201c0 1.15-.383 1.533-1.533 1.533-.768 0-1.15-.383-1.15-1.533v-14.186h-.001zM123.984 162.133c3.066 0 4.6 1.15 4.6 2.301 0 .385-.383 1.15-1.15 1.15-1.148 0-1.533-.766-3.449-.766-3.451 0-4.602 3.066-4.602 6.135 0 2.684 1.15 6.135 4.602 6.135 1.916 0 2.684-.768 3.449-.768.768 0 1.15.383 1.15 1.15 0 .766-1.533 1.916-4.6 1.916-4.984 0-7.668-3.834-7.668-8.434s2.684-8.819 7.668-8.819zM132.803 169.803c0-2.301 1.15-5.369 4.602-4.984 3.066 0 4.6 2.684 4.6 4.984h-9.202zm10.351 2.299c1.15 0 1.533-.766 1.533-1.533 0-4.217-2.684-8.436-7.283-8.436-4.602 0-7.67 4.219-7.67 8.82 0 4.6 2.686 8.434 8.053 8.434 3.066 0 6.518-1.916 6.518-3.451 0-.766-.383-1.148-.768-1.148-1.148 0-2.301 2.301-5.75 2.301-3.068 0-4.984-2.301-4.984-4.986h10.351v-.001z" fill="#0c0e0f" />
                <path d="M161.176 78.166c0 35.659-28.756 64.797-64.798 64.797-35.658 0-64.797-29.139-64.797-64.797 0-36.041 29.139-64.797 64.797-64.797 36.042 0 64.798 28.756 64.798 64.797z" fill="#3a2f64" />
                <path d="M144.305 92.735c1.15-.767 1.533-2.3 1.533-3.833 0-3.451-3.066-6.519-6.9-6.519-1.15 0-2.301.384-3.068.767-1.916-1.533-3.834-3.45-6.135-5.367 14.188-11.886 21.473-23.005 18.021-29.14s-16.871-5.368-33.74.767c-3.068-18.404-9.203-31.056-16.486-31.056-2.301 0-4.219 1.533-6.136 3.834-.767-.383-1.534-.383-2.301-.383-3.833 0-6.518 2.684-6.518 6.518 0 2.301.767 4.218 2.684 5.368-1.917 4.601-3.067 9.969-4.218 15.72-18.021-6.518-32.207-7.668-35.657-1.533-3.834 6.134 4.217 18.02 18.787 29.906-14.953 12.269-23.005 24.155-19.554 30.29 1.917 3.451 6.902 4.602 13.803 4.217 1.15 1.918 3.45 3.451 5.751 3.451 3.451 0 6.518-2.684 6.901-6.135 3.068-.766 6.518-1.916 9.969-3.066 3.451 18.402 9.585 31.057 16.488 31.057 7.283 0 13.418-12.654 16.486-31.057 17.254 6.135 31.057 6.9 34.506 1.15 1.918-3.453.385-8.82-4.216-14.956zm2.3-43.325c2.684 4.218-5.752 14.57-20.32 25.689-3.068-2.684-6.52-4.984-10.354-7.285 0-4.985-.383-9.586-1.15-13.803 16.489-6.902 29.524-9.202 31.824-4.601zM105.58 94.653c1.916-1.15 3.834-2.301 5.367-3.45 0 3.067-.383 6.133-.766 8.819-2.301-1.15-4.984-2.301-7.67-3.451.768-.767 1.918-1.151 2.686-1.917h.383v-.001zm-2.301-4.218h-.383c-1.918 1.15-3.834 2.3-5.752 3.067-2.3-1.15-4.601-2.3-7.285-3.834l-5.751-3.451c0-2.684-.384-5.367-.384-8.052v-.383c0-2.684.384-5.368.384-8.052 1.534-1.151 3.451-2.301 5.368-3.067 2.3-1.534 4.984-3.067 7.668-4.601 2.301 1.15 4.219 2.684 6.52 3.833 2.684 1.534 4.982 3.067 7.668 4.601v14.953c-2.686 1.535-5.369 3.069-8.053 4.986zM91.777 96.57c-2.3 1.15-4.601 2.301-6.901 3.066-.383-2.301-.383-4.984-.383-7.285.767.383 1.534.767 2.684 1.534h.384c1.532 1.151 2.683 1.918 4.216 2.685zM78.742 78.166c0 1.534 0 3.068.383 4.984-2.684-1.917-5.368-3.45-7.668-5.367 2.3-1.533 4.984-3.067 7.668-4.984-.383 1.533-.383 3.067-.383 4.601v.766zm5.75-14.57c0-2.684 0-4.984.383-7.285 2.3.767 4.601 1.917 6.901 3.067-1.533.767-3.45 1.917-4.984 2.685-.766.766-1.533 1.15-2.3 1.533zm18.02-4.218c2.686-1.15 5.369-2.684 7.67-3.45.383 2.684.766 5.367.766 8.435-1.533-.767-3.066-1.917-4.6-2.684-1.536-.767-2.684-1.533-3.836-2.301zm13.804 14.187c1.916 1.534 4.217 3.067 6.135 4.218-1.918 1.533-3.836 3.067-6.135 4.218v-3.835-4.601zM88.327 34.84h.766c3.451 0 6.518-2.684 6.518-6.519 0-2.3-.767-4.218-2.684-5.368 1.534-1.917 3.067-3.067 4.602-3.067 5.367 0 9.967 12.653 12.268 31.057-4.217 1.533-8.434 3.451-12.652 5.75-3.834-1.917-8.052-3.833-11.885-5.368a141.814 141.814 0 0 1 3.067-16.485zM46.151 48.643c3.067-4.601 16.486-2.3 34.124 5.368l-1.15 12.653c-4.218 2.684-8.052 5.751-11.502 8.435-14.954-11.503-23.772-21.855-21.472-26.456zm24.155 57.128c-1.15-1.916-3.451-3.449-6.134-3.449-3.451 0-6.519 3.066-6.519 6.518v.383c-6.134 1.15-10.352.768-11.885-1.533-2.684-4.984 6.518-15.337 21.854-26.839 3.451 2.684 7.285 5.367 11.502 8.052.383 4.601.767 8.819 1.15 13.036-3.45 1.532-6.901 2.682-9.968 3.832zm27.223 30.674c-5.369 0-9.97-13.037-12.27-31.824 3.833-1.533 8.051-3.451 11.885-5.367 4.219 2.301 8.436 4.217 12.652 5.752-2.3 18.402-6.9 31.439-12.267 31.439zm49.842-29.523c-2.684 4.602-15.719 2.301-32.59-4.984.768-4.217 1.15-8.818 1.15-13.802 3.834-2.301 7.285-4.985 10.354-7.285 2.299 1.533 4.6 3.45 6.9 5.367-.383.767-.766 1.918-.766 2.685 0 3.833 3.066 6.901 6.518 6.901 1.15 0 2.299-.384 3.066-.768 4.602 4.985 6.903 9.202 5.368 11.886z" fill="#fff" />
                <path d="M97.145 71.264c-3.45 0-6.518 2.685-6.518 6.519s3.067 6.518 6.518 6.518c3.834 0 6.902-2.684 6.902-6.518s-3.068-6.519-6.902-6.519z" fill="#fff" />
            </g>
        </svg>





    );

export default SVG;