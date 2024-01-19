import React from 'react';
import { useField } from 'formik';

function CustomInput({ label, className, formGroupClass, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className={`form-group ${formGroupClass || 'mb-4'} `}>
            <label className="form-label text-xs sm:text-sm"> {label} </label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`}
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-2">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default CustomInput;
