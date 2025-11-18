import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Input2 from './Input2'
import Input3 from './Input3'
import Input4f from './Input4f'
import Input5 from './Input5'
import InputLast from './InputLast'
import Breadcrumb from '../local data/Breadcrumb'


function Input() {

  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const industries = [
    'Air',
    'Construction',
    'Education',
    'Finance',
    'Healthcare',
    'Hospitality',
    'Logistics',
    'Manufacturing',
    'Media',
  ];

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
    <>

      <div>
        {/* //dash>client */}
        <div className="flex items-center justify-between mb-1">
          <Breadcrumb name={'Client'} ishidden={''} secName={'Create'}/>

          {/* //navbar under button */}
          <div className="">
            <NavLink to={"/"}>
              <button className="px-2 py-1 bg-white border border-green-700 text-green-700 rounded"><i class="fa-solid fa-arrow-left"></i></button>
            </NavLink>
          </div>

        </div>

        {/* //main div */}
        <div className=' w-full h-[480px] mt-3 rounded-xs overflow-y-auto'>
          <form onSubmit={formik.handleSubmit} >
            <div className="max-w-full px-8 py-5 bg-white shadow-lg rounded-xl ">
              <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6">
                Client
              </span>
              <div className=' flex relative my-4'>
                <div className=' w-21 h-21 rounded-full bg-gradient-to-r flex items-center justify-center from-green-400 to-blue-500'>
                  <div className=' w-20 h-20  rounded-full justify-center bg-white flex items-center text-center text-xs '>
                    <p className=' text-gray-400'>No image</p>
                  </div>
                </div>
                <input type="file"
                  id='fileInput'
                  className=' hidden' />
                <label className=' absolute left-23 top-7 rounded-[5px_5px_5px_5px] px-3 py-1.5 font-semibold text-xs bg-linear-to-l from-blue-500 to-green-400 text-white' htmlFor="fileInput">
                  Choose
                </label>
              </div>

              {/* company and industry */}
              <div className=" w-full grid grid-cols-[66%_4%_30%]">

                {/* Company Name */}
                <div className=' w-full'>
                  {formik.errors.cname ?
                    <label
                      className="block text-sm font-medium text-red-700 mb-1"
                      htmlFor="cname">
                      {formik.errors.cname}
                    </label> :
                    <label
                      className="block text-sm font-medium text-gray-700 mb-3"
                      htmlFor="cname">
                      Company
                    </label>
                  }
                  <input
                    type="text"
                    id="cname"
                    name="cname"
                    onChange={formik.handleChange}
                    value={formik.values.cname}
                    placeholder="Enter company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* //this div for middle gap */}
                <div className=' w-full'></div>

                {/* //industry */}
                <div className=' w-full relative'>

                  <label htmlFor='industry'
                    className="text-sm text-gray-700 font-medium ">Industry</label>

                  <div className="flex mt-2 items-center gap-2">
                    {/* Select box */}
                    <div className="relative w-full">
                      <div
                        onClick={() => setOpen(!open)}
                        className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                      >
                        <input
                          type="text"
                          placeholder="Industry"
                          name='industry'
                          value={selected}
                          onChange={(e) => setSelected(e.target.value)}
                          className="outline-none w-full border-r-2 border-gray-300"
                        />
                        <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                      </div>

                      {/* Dropdown */}
                      {open && (
                        <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full max-h-48 overflow-y-auto shadow-lg">
                          {industries.map((industry, index) => (
                            <li
                              key={index}
                              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                              onClick={() => {
                                setSelected(industry);
                                setOpen(false);
                              }}
                            >
                              {industry}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Red "+" button */}
                  <button
                    type="button"
                    className="flex absolute px-1 py-1 bottom-12 right-0 text-xs items-center justify-center bg-red-700 text-white rounded-md hover:bg-red-700"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* next email phone website */}
              <div className=' grid grid-cols-[30%_4%_8%_24%_4%_30%] mt-4'>

                {/* email */}
                <div className=' w-full'>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-3"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* empty div for space */}
                <div></div>

                {/* country code */}
                <div className='w-full'>
                  <label className="text-sm text-gray-700 font-medium">Phone</label>

                  <div className="flex mt-2 items-center gap-2">
                    {/* Select box */}
                    <div className="relative w-full">
                      <div
                        className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                      >
                        <input
                          type="text"
                          placeholder="00"
                          className="outline-none w-full border-r-2 border-gray-300"
                        />
                        <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                </div>

                {/* //phone */}
                <div className=' w-full'>
                  <label
                    className="block text-sm font-medium text-white mb-3"
                  >
                    ...
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* //div for space  */}
                <div className=' w-full'></div>

                {/* //website */}
                <div className=' w-full'>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-3"
                    htmlFor="web">
                    Website
                  </label>
                  <input
                    type="text"
                    name="web"
                    placeholder="Phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* //cR, VAT sales parson */}
              <div className=' grid grid-cols-[30%_4%_32%_4%_30%] mt-4'>

                {/* //CR number */}
                <div className=' w-full'>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-3"
                    htmlFor="cr">
                    CR Number
                  </label>
                  <input
                    type="text"
                    name="cr"
                    placeholder="CR Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* //gap div */}
                <div></div>

                {/* //VAT number */}
                <div className=' w-full'>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-3"
                    htmlFor="vat">
                    VAT Number
                  </label>
                  <input
                    type="text"
                    name="vat"
                    placeholder="VAT Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* //gap div */}
                <div></div>

                {/* //sales person */}
                <div className=' w-full relative'>

                  <label className="text-sm text-gray-700 font-medium ">Sales Preson</label>

                  <div className="flex mt-2 items-center gap-2">
                    {/* Select box */}
                    <div className="relative w-full">
                      <div
                        className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                      >
                        <input
                          type="text"
                          placeholder="Industry"
                          className="outline-none w-full border-r-2 border-gray-300"
                        />
                        <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //rating */}
              <div className=' w-[30%] relative mb-4 mt-4'>

                <label className="text-sm text-gray-700 font-medium ">Ratings</label>

                <div className="flex mt-2 items-center gap-2">
                  {/* Select box */}
                  <div className="relative w-full">
                    <div
                      className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                    >
                      <input
                        type="text"
                        placeholder="Ratings"
                        className="outline-none w-full border-r-2 border-gray-300"
                      />
                      <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Input2 />
            <Input3 />
            <Input4f />
            <Input5 />
            <InputLast />


          </form>

        </div >
        <ToastContainer />

      </div >

    </>

  )
}

export default Input