import React from 'react'
import { useField } from 'formik';

function TextArea({ label, className, ...props }) {

    const [field, meta] = useField(props);

    return (

        <div className="form-group mb-4">
            <label className="form-label text-xs sm:text-sm"> {label} </label>
            <textarea  {...field} {...props} className={`form-control h-28 shadow-none ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`}></textarea>
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-2">{meta.error}</div>
            ) : null}
        </div>

    )
}

export default TextArea