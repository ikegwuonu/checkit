"use client"

import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/slices/slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Modal = ({ id, setId, myStatus, setMyStatus, type, setType, setModalOpen, setTableData, currentPage }) => {
  const reduxData = useSelector((state) => state.table.value);
  const dispatch = useDispatch();

  // Validation schema for Yup
  const validationSchema = Yup.object().shape({
    status: Yup.string().required("Status is required"),
    type: Yup.string().required("Type is required")
  });

  const handleSubmit = (values) => {
    dispatch(edit([id, values.status, values.type]));

    const max = 5 * currentPage;
    const min = max - 5;
    setTableData(reduxData.slice(min, max));
    setModalOpen(false);
  };

  return (
    <div className="bg-red-500 opacity-100">
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            <h3 className="text-lg justify-between flex font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
              <span>Edit Capsule</span>
              <span className="cursor-pointer " onClick={() => setModalOpen(false)}>X</span>
            </h3>

            <Formik
              initialValues={{ status: myStatus, type }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="mt-4">
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
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
