import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="px-2 sm:px-3 md:px-4">
            {children}
        </div>
    );
};

export default Container;
