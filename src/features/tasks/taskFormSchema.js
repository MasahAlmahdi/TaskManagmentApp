import * as Yup from 'yup';

export const taskFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  priority: Yup.string().oneOf(['Low', 'Medium', 'High']).required(),
  state: Yup.string().oneOf(['todo', 'doing', 'done']).required(),
});
