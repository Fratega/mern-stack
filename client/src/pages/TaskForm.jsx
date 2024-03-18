import React from "react";
import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
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
