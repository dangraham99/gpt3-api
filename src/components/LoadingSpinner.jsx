import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-full m-2">
            <div className="w-6 h-6 border-t-2 border-gray-200 border-opacity-25 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;