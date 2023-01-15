import React, { useState, useRef } from "react";
import {
  DContainer,
  DCopy,
  DRow,
  DTitle,
} from "../../components/docs/layout/DocsLayout";
import { URI } from "../../api/URI";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

function Component({ html, href }) {
  const [res, setres] = useState("");

  console.log(URI + href);
  axios.get(URI + href).then((e) => {
    setres(e.data);
    console.log(res);
  });

  if (res) {
    return (
      <SyntaxHighlighter language="html" className="max-h-[400px]">
        {res}
      </SyntaxHighlighter>
    );
  }
}

export default function Accordion({ children, path }) {
  if (path === "accordion") {
    return (
      <div>
        <DefaultA></DefaultA>
        <Component href={"/components/accordion/default.html"}></Component>
        <FlushA></FlushA>
        <Component href={"/components/accordion/flush.html"}></Component>
        <ArrowA></ArrowA>
        <Component href={"/components/accordion/arrow.html"}></Component>
      </div>
    );
  }
}

export function DefaultA() {
  const [num, setnum] = useState(1);

  return (
    <DContainer>
      <DRow>
        <DTitle>Default</DTitle>
        <DCopy id="defaultAccordion"></DCopy>
      </DRow>
      <div className="py-2">
        <div id="defaultAccordion">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => {
                setnum(num ? 0 : 1);
              }}
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon=""
                className="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={num === 1 ? "" : "hidden"}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 font-light border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-500">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500">
                Check out this guide to learn how to
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline"
                >
                  get started
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 "
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
              onClick={() => {
                setnum(num ? 0 : 2);
              }}
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon=""
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={num === 2 ? "" : "hidden"}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 font-light border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-500">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 "
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
              onClick={() => {
                setnum(num ? 0 : 3);
              }}
            >
              <span>
                What are the differences between Flowbite and Tailwind UI?
              </span>
              <svg
                data-accordion-icon=""
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={num === 3 ? "" : "hidden"}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 font-light border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-500">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500">
                Learn more about these technologies:
              </p>
              <ul className="pl-5 text-gray-500 list-disc">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DContainer>
  );
}
export function FlushA() {
  const [num, setnum] = useState(1);
  return (
    <DContainer>
      <DRow>
        <DTitle>Flush</DTitle>
        <DCopy id="flushAccordion"></DCopy>
      </DRow>
      <div className="py-2">
        <div id="flushAccordion">
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200  "
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
              onClick={() => {
                setnum(num ? 0 : 1);
              }}
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className={
                  num === 1 ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className={num === 1 ? "" : "hidden"}
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 font-light border-b border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 ">
                Check out this guide to learn how to
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600  hover:underline"
                >
                  get started
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200  "
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
              onClick={() => {
                setnum(num ? 0 : 2);
              }}
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon
                className={
                  num === 2 ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className={num === 2 ? "" : "hidden"}
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 font-light border-b border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 ">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600  hover:underline"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200  "
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
              onClick={() => {
                setnum(num ? 0 : 3);
              }}
            >
              <span>
                What are the differences between Flowbite and Tailwind UI?
              </span>
              <svg
                data-accordion-icon
                className={
                  num === 3 ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className={num === 3 ? "" : "hidden"}
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 font-light border-b border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 ">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 ">
                Learn more about these technologies:
              </p>
              <ul className="pl-5 text-gray-500 list-disc ">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600  hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600  hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
    </DContainer>
  );
}
export function ArrowA() {
  const [num, setnum] = useState(1);
  return (
    <DContainer>
      <DRow>
        <DTitle>Arrow</DTitle>
        <DCopy id="arrowAccordion"></DCopy>
      </DRow>
      <div className="py-2">
        <div id="arrowAccordion">
          <h2 id="accordion-arrow-icon-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200      "
              data-accordion-target="#accordion-arrow-icon-body-1"
              aria-expanded="true"
              aria-controls="accordion-arrow-icon-body-1"
              onClick={() => {
                setnum(num ? 0 : 1);
              }}
            >
              <span>Accordion without an arrow</span>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-1"
            aria-labelledby="accordion-arrow-icon-heading-1"
            className={num === 1 ? "" : "hidden"}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200  ">
              <p className="mb-2 text-gray-500 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 ">
                Check out this guide to learn how to
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600  hover:underline"
                >
                  get started
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-arrow-icon-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200     "
              data-accordion-target="#accordion-arrow-icon-body-2"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-2"
              onClick={() => {
                setnum(num ? 0 : 2);
              }}
            >
              <span>Accordion with another icon</span>
              <svg
                data-accordion-icon
                className={
                  num === 2 ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-2"
            className={num === 2 ? "" : "hidden"}
            aria-labelledby="accordion-arrow-icon-heading-2"
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 ">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600  hover:underline"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-arrow-icon-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200     "
              data-accordion-target="#accordion-arrow-icon-body-3"
              aria-expanded="false"
              aria-controls="accordion-arrow-icon-body-3"
              onClick={() => {
                setnum(num ? 0 : 3);
              }}
            >
              <span>Accordion without arrow rotation</span>
              <svg
                className={
                  num === 3 ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-arrow-icon-body-3"
            className={num === 3 ? "" : "hidden"}
            aria-labelledby="accordion-arrow-icon-heading-3"
          >
            <div className="p-5 font-light border border-t-0 border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 ">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 ">
                Learn more about these technologies:
              </p>
              <ul className="pl-5 text-gray-500 list-disc ">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600  hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600  hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DContainer>
  );
}
