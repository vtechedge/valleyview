import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Dates = [
  {
    Monday: "9am to 7pm",
    Tuesday: "9am to 7pm",
    Wednesday: "9am to 7pm",
    Thursday: "9am to 7pm",
    Friday: "9am to 5pm",
    Saturday: "9am to 2pm",
    "Sunday/Stat Holidays": "Closed",
  },
];

const oshawaDates = [
  {
    Monday: "9am to 7pm",
    Tuesday: "9am to 7pm",
    Wednesday: "9am to 7pm",
    Thursday: "9am to 7pm",
    Friday: "9am to 7pm",
    "Sat/Sun": "10am to 3pm",
    "Stat holidays (open) Please confirm with the front desk staff": "",
  },
];
const courticeDates = [
  {
    Monday: "9am to 7pm",
    Tuesday: "9am to 7pm",
    Wednesday: "9am to 7pm",
    Thursday: "9am to 7pm",
    Friday: "9am to 7pm",
    "Sat/Sun": "10am to 3pm",
    "Stat holidays (open) Please confirm with the front desk staff": "",
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:info@valleyviewmedical.ca?subject=New Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Message: ${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  const locationAccess = localStorage.getItem("location", location);

  return (
    <>
      <Head>
        <title>Contact Us | Vallewview Medical Centre</title>
      </Head>
      <div>
        <Banner subtitle="Contact Us" buttonText="Email Us" />
        <div className="flex flex-col xl:flex-row w-full gap-10 padding-x py-[50px]">
          <div className="flex flex-col w-full xl:w-[50%]">
            <p className="text-[16px] font-thin">
              Accessible Parking Available
            </p>
            <h1
              className=" font-medium text-blue-600"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Location
            </h1>
            {locationAccess === "Whitby" ? (
              <p
                className="font-light pb-[30px]"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                1916 Dundas St E Unit 6, Whitby
              </p>
            ) : locationAccess === "Oshawa" ? (
              <p
                className="font-light pb-[30px]"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                991 Taunton Rd E B3, Oshawa, ON L1K 0Z7, Canada
              </p>
            ) : (
              <p
                className="font-light pb-[30px]"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                1656 Nash Rd #2Courtice, ON L1E 1S8
              </p>
            )}

            {locationAccess === "Whitby" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-[450px]"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            ) : locationAccess === "Oshawa" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.078275663616!2d-78.84900402362726!3d43.94217347107847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52d5f4c97b78f%3A0xc09f357d032f78e!2s991%20Taunton%20Rd%20E%20B3%2C%20Oshawa%2C%20ON%20L1K%200Z7%2C%20Canada!5e0!3m2!1sen!2sca!4v1710968456285!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.148226363602!2d-78.8865449!3d43.9145857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d50320e74f0f4b%3A0x4e353d881000c613!2sValleyView%20Medical%20%26%20Walk-In%20Courtice!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            )}
          </div>
          <div className="w-full xl:w-[50%]">
            <h1 className="text-[24px] font-semibold py-5 text-blue-600">
              Any Queries?
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              >
                <option value="">Select City</option>
                <option value="Whitby">Whitby</option>
                <option value="Oshawa">Oshawa</option>
                <option value="Courtice">Courtice</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4 w-full  padding-x pb-[50px]">
          <div className="w-[50%]">
            <p className="text-[16px] font-thin">Valleyview Medical Centre</p>
            <h1
              className=" font-medium text-blue-600"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Visit a Doctor
            </h1>
            <p
              className=" font-light pb-[30px] text-blue-600"
              style={{ fontSize: Clamp(1, 1.5) }}
            >
              {locationAccess === "Whitby"
                ? " +1 905-434-1662"
                : locationAccess === "Oshawa"
                  ? "+1 905-367-5402"
                  : "+1 905-674-1447"}
            </p>
            <div className="text-[16px]">
              {locationAccess === "Whitby" ? (
                <>
                  {Object.entries(Dates[0]).map(([day, time]) => (
                    <div
                      key={day}
                      className="grid grid-cols-2 gap-x-1 pb-2 items-center justify-start"
                    >
                      <p className="font-bold whitespace-nowrap">{day}:</p>
                      <p>{time}</p>
                    </div>
                  ))}
                </>
              ) : locationAccess === "Oshawa" ? (
                <>
                  {Object.entries(oshawaDates[0]).map(([day, time]) => (
                    <div
                      key={day}
                      className="grid grid-cols-2 gap-x-1 pb-2 items-center justify-start"
                    >
                      <p className="font-bold whitespace-nowrap">{day}:</p>
                      <p>{time}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {Object.entries(courticeDates[0]).map(([day, time]) => (
                    <div
                      key={day}
                      className="grid grid-cols-2 gap-x-1 pb-2 items-center justify-start"
                    >
                      <p className="font-bold whitespace-nowrap">{day}:</p>
                      <p>{time}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <span className="flex items-start xl:items-end">
              <h1 className="font-bold text-[18px]">NOTE:</h1>
              Times may vary depending on doctor’s availability
            </span>
          </div>
          <div className="w-[50%]">
            <p className="pt-[30px]" style={{ fontSize: Clamp(1, 1.25) }}>
              As a community-oriented medical clinic in Whitby, we offer a wide
              range of services designed to address all of your health care
              needs. From routine check-ups, scheduled appointments to see your
              family doctor, walk-in patient assessments and preventive care, we
              aim to be your one-stop solution for maintaining and enhancing
              your well-being.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
