// eslint-disable-next-line no-unused-vars
import React, { useEffect }  from "react";
import PropTypes from "prop-types";
const ToastSuccess = ({ message,onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the toast after 4 seconds
    }, 2000);

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [onClose]);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-lg">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
ToastSuccess.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};
export default ToastSuccess;
