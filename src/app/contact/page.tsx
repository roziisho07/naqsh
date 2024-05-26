"use client";
import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Navbar from "@/components/NavContact";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [state, handleSubmit] = useForm("xvoenwpw");

  if (state.succeeded) {
    return (
      <div className="w-full h-auto flex">
        <Navbar />
        <div className="flex items-center justify-center flex-col h-auto w-full px-20">
          <Alert className="mb-10">
            <AlertTitle>Thank you!</AlertTitle>
            <AlertDescription>
              Your message has been recieved. You will hear back from us
              shortly.
            </AlertDescription>
          </Alert>
          <Link
            className="border rounded-lg p-2  bg-gray-300 text-slate-900 group-hover:text-white text-sm font-semibold flex items-center space-x-3  hover:bg-sky-400 hover:ring-sky-400"
            href={"/"}
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 dark:bg-gray-900">
      <Navbar />
      <div className="py-8  lg:py-16 pt-12 px-10 mx-auto max-w-screen-md  h-[auto] bg-white ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Ready to Kickstart Your Project?
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Looking for details, a quote, or have any questions? Reach out to us
          today! We are here to help you get started. Contact us now!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8 p-4 ">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your full name"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="phone"
              field="number"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone Number{" "}
              <span className="text-sm text-gray-400">optional</span>
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your phone number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={(e) => setEmail(e.target.value)}
            />
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <ValidationError
              prefix="subject"
              field="subject"
              errors={state.errors}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message / project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
