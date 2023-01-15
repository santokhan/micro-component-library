import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  DContainer,
  DCopy,
  DRow,
  DTitle,
} from "../../components/docs/layout/DocsLayout";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { URI } from "../../api/URI";

function Component({ html }) {
  return (
    <SyntaxHighlighter language="html" className="max-h-[400px]">
      {html}
    </SyntaxHighlighter>
  );
}

export default function Alerts({ children, path }) {
  if (path === "alerts") {
    return (
      <div>
        <Default></Default>
        <Icon></Icon>
        <List></List>
        <Dismissing></Dismissing>
      </div>
    );
  }
}

export function Default({ htmlRef }) {
  const [res, setres] = useState("");
  const html = useRef();

  axios.get(URI + "/components/alerts/default.html").then((e) => {
    setres(e.data);
  });

  useEffect(() => {
    if (html.current) {
      html.current.innerHTML = res;
    }
  }, [res]);

  if (res) {
    return (
      <DContainer>
        <DRow>
          <DTitle>Default</DTitle>
          <DCopy id="Defaultlerts"></DCopy>
        </DRow>
        <div className="py-2" ref={html}></div>
        <Component html={res}></Component>
      </DContainer>
    );
  }
}
export function Icon() {
  const [res, setres] = useState("");
  const html = useRef();

  axios.get(URI + "/components/alerts/icon.html").then((e) => {
    setres(e.data);
  });

  useEffect(() => {
    if (html.current) {
      html.current.innerHTML = res;
    }
  }, [res]);

  if (res) {
    return (
      <DContainer>
        <DRow>
          <DTitle>Icon</DTitle>
          <DCopy id="Defaultlerts"></DCopy>
        </DRow>
        <div className="py-2" ref={html}></div>
        <Component html={res}></Component>
      </DContainer>
    );
  }
}
export function List() {
  const [res, setres] = useState("");
  const html = useRef();

  axios.get(URI + "/components/alerts/list.html").then((e) => {
    setres(e.data);
  });

  useEffect(() => {
    if (html.current) {
      html.current.innerHTML = res;
    }
  }, [res]);

  if (res) {
    return (
      <DContainer>
        <DRow>
          <DTitle>List</DTitle>
          <DCopy id="Defaultlerts"></DCopy>
        </DRow>
        <div className="py-2" ref={html}></div>
        <Component html={res}></Component>
      </DContainer>
    );
  }
}
export function Dismissing() {
  const [res, setres] = useState("");
  const html = useRef();

  axios.get(URI + "/components/alerts/dismissing.html").then((e) => {
    setres(e.data);
  });

  useEffect(() => {
    if (html.current) {
      html.current.innerHTML = res;
    }
  }, [res]);

  if (res) {
    return (
      <DContainer>
        <DRow>
          <DTitle>Dismissing</DTitle>
          <DCopy id="Defaultlerts"></DCopy>
        </DRow>
        <div className="py-2" ref={html}></div>
        <Component html={res}></Component>
      </DContainer>
    );
  }
}
