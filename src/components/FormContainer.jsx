import React from 'react';

const FormContainer = ({ children }) => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center mt-5">
                <div className="w-full md:w-1/2 p-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
