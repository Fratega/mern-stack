import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useTasks();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              title
              <input
                type="text"
                name="title"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.title}
              />
            </label>
            <label>
              description
              <textarea
                name="description"
                rows="3"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
