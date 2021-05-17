import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let appComponent;

beforeEach(() => {
  appComponent = shallow(<App />);
});

it("shows a comment box component", () => {
  expect(appComponent.find(CommentBox).length).toEqual(1);
});

it("shows a comment list component", () => {
  expect(appComponent.find(CommentList).length).toEqual(1);
});
