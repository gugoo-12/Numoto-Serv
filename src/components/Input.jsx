import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Input() {

  const navigate = useNavigate(1)

  const formik = useFormik({
    initialValues: {
      cname: "",
      name: "",
      email: "",
      num: ""
    },
    onSubmit: async (values) => {
      if (values.cname && values.name && values.email && values.num) {
        try {
          // 1. Get all clients to find the last ref number
          const getRes = await fetch('http://localhost:3000/clients');
          const clients = await getRes.json();

          // 2. Find the max number from existing refs
          let maxNum = 0;
          clients.forEach(client => {
            const numPart = parseInt(client.ref.split('-')[1]);
            if (numPart > maxNum) maxNum = numPart;
          });

          // 3. Increment for new client
          const newRef = `CLNT-${String(maxNum + 1).padStart(3, '0')}`;


          // 4. Create avatar from first letter of company name
          const avatar = values.cname.trim().charAt(0).toUpperCase();


          const res = await fetch('http://localhost:3000/clients', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              name: values.cname,
              ref: newRef,
              contactName: values.name,
              email: values.email,
              phone: values.num,
              avatar: avatar
            })
          })

          if (res.ok) {
            toast.success("Client added successfully!", {
              position: "bottom-right",
              autoClose: 1500,
            })
            setTimeout(() => navigate('/'), 1600)
          }
          else {
            toast.error("❌ Failed to add client!")
            console.error("Failed to add client:", res.status)
          }
        }
        catch {
          toast.error("⚠️ Error submitting form!")
          console.error("Error submitting form:", error)
        }
      }
    },
    validate: values => {
      let errors = {}

      if (!values.cname) {
        errors.cname = 'Company name reuired*'
        console.log(errors.cname);

      }

      if (!values.name) {
        errors.name = 'Name Reuired*'
      }

      if (!values.email) {
        errors.email = 'E-mail required*'
      } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
        errors.email = 'Invalid email format'
      }

      if (!values.num) {
        errors.num = 'Ph.no Reuired*'
      }

      return errors

    }
  })
  return (
    <div>
      <button className=' bg-green-600 px-2 text-white rounded-[8px_8px_0px_0px]'>Client</button>
      <div className=' w-full h-[430px] bg-gray-50 px-4 py-4 overflow-y-auto'>
        <form onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-5">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
            Client Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              {formik.errors.cname ?
                <label
                  className="block text-sm font-medium text-red-700 mb-1"
                  htmlFor="cname">
                  {formik.errors.cname}
                </label> :
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="cname">
                  Company Name
                </label>
              }
              <input
                type="text"
                id="cname"
                name="cname"
                onChange={formik.handleChange}
                value={formik.values.cname}
                placeholder="Enter company name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Your Name */}
            <div>
              {formik.errors.name ?
                <label
                  className="block text-sm font-medium text-red-700 mb-1"
                  htmlFor="name">
                  {formik.errors.name}
                </label> :
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name">
                  Your Name
                </label>
              }
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              {formik.errors.email ?
                <label
                  className="block text-sm font-medium text-red-700 mb-1"
                  htmlFor="email">
                  {formik.errors.email}
                </label> :
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email">
                  Email
                </label>
              }
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            {/* Phone Number */}
            <div>
              {formik.errors.num ?
                <label
                  className="block text-sm font-medium text-red-700 mb-1"
                  htmlFor="num">
                  {formik.errors.num}
                </label> :
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="num">
                  Phone Number
                </label>
              }
              <input
                type="text"
                name="num"
                onChange={formik.handleChange}
                value={formik.values.num}
                placeholder="Enter phone number"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full md:w-1/2 py-3 text-white bg-green-600 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Input