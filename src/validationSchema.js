import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup
        .string()
        .required('Description is required')
        .max(120, 'Description must be at most 120 characters'),
    dueDate: yup.date().required('Due date is required'),
});

export default schema;
