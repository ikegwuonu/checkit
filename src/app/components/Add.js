"use client"

import { useDispatch } from "react-redux";
import { add } from "../store/slices/slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Add = ({ setAddOpen }) => {
  const dispatch = useDispatch();

  // Validation schema for Yup
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Capsule ID is required"),
    status: Yup.string().required("Status is required"),
    type: Yup.string().required("Type is required"),
  });

  const handleSubmit = (values) => {
    dispatch(add([values.id, values.status, values.type]));
    setAddOpen(false);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
          <h3 className="text-lg justify-between flex font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
            <span>Add Capsule</span>
            <span className="cursor-pointer " onClick={() => setAddOpen(false)}>X</span>
          </h3>

          <Formik
            initialValues={{ id: "", status: "", type: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mt-4">
                <label className="block mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-200">Capsule ID</p>
                  <Field
                    type="text"
                    name="id"
                    placeholder="capsule id"
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                  />
                  <ErrorMessage name="id" component="div" className="text-red-500 text-sm" />
                </label>

                <label className="block mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-200">Capsule status</p>
                  <Field
                    type="text"
                    name="status"
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                  />
                  <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
                </label>

                <label className="block mt-3">
                  <p className="text-sm text-gray-700 dark:text-gray-200">Capsule type</p>
                  <Field
                    type="text"
                    name="type"
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                  />
                  <ErrorMessage name="type" component="div" className="text-red-500 text-sm" />
                </label>

                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                  >
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Add;
