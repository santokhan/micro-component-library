import React, { useState, useEffect } from "react";
import Remover from "./functions/Remover";
import Rename from "./functions/Rename";
import NavBar from "./NavBar";
import Title from "./title/Title";

export default function DarkRemover() {
  const [input, setinput] = useState();

  function handleSubmit(e) {
    setinput({ value: e });
  }

  useEffect(() => {
    setinput({
      value:
        '<div className="border rounded-lg dark:bg-gray-800 dark:border-gray-700"></div>',
    });
  }, []);

  return (
    <div className="bg-gray-50 h-screen flex flex-col justify-between">
      <div>
        <div className="bg-white">
          <NavBar></NavBar>
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col xl:flex-row xl:justify-center items-center lg:items-start py-10">
          <InputCode
            input={input.value}
            handleSubmit={handleSubmit}
          ></InputCode>
          <ExecuteCode input={input.value}></ExecuteCode>
        </div>
      </div>
    </div>
  );
}

export function InputCode({ input, handleSubmit }) {
  return (
    <form>
      <Title>HTML</Title>
      <pre>
        <textarea
          onChange={(e) => {
            handleSubmit(e.target.value);
          }}
          defaultValue={input}
          cols="100"
          rows="32"
          className="w-full mx-auto text-sm text-gray-900 bg-gray-50 border p-5 lg:p-8"
          placeholder="Paste your code"
          spellCheck="false"
        ></textarea>
      </pre>
    </form>
  );
}

export function ExecuteCode({ input }) {
  return (
    <form>
      <Title>JSX</Title>
      <pre>
        <textarea
          id="export"
          cols="100"
          rows="32"
          className="w-full mx-auto text-sm text-gray-900 bg-gray-50 border p-5 lg:p-8"
          placeholder="Copy your code"
          spellCheck="false"
          // readOnly="true"
          defaultValue={Filter(input)}
        ></textarea>
      </pre>
      <CopyButton data=""></CopyButton>
    </form>
  );
}
export function CopyButton({ data }) {
  const [copy, setcopy] = useState("Copy");

  return (
    <div className="py-4 px-5 lg:px-8">
      <button
        onClick={() => {
          if (data) {
            setcopy("Copied");

            navigator.clipboard.writeText(data);
          }
        }}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ease-in"
      >
        {copy}
      </button>
    </div>
  );
}

/**
 * Keep in mind this function does not support for SVG elements
 * @param {*} input
 * @returns
 */
function Filter(input) {
  const parent = document.createElement("DIV");
  if (input) {
    parent.innerHTML = input;
    let targetElements = "";
    if (parent.children) {
      targetElements = parent.children;
    }

    function loop(elements) {
      for (const element of elements) {
        if (
          element.tagName === "svg" ||
          element.tagName === "path" ||
          element.tagName === "circle" ||
          element.tagName === "rect" ||
          element.tagName === "polygon"
        ) {
          element.className.baseVal = Remover(element.className.baseVal);
        } else {
          if (element.className) {
            // console.log(element.classList);
            element.className = Remover(element.className);
          }
          if (element.children && element.children.length > 0) {
            loop(element.children);
          }
        }
      }
    }
    loop(targetElements);

    // Destructuring HTML
    let htmls = "";
    for (const e of targetElements) {
      htmls += e.outerHTML;
    }
    // console.log(htmls);
    return Rename(htmls);
  }
}
