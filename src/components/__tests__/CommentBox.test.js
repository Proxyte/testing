import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find(".textarea-comment").length).toEqual(1);
  expect(wrapped.find(".submit-comment").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find(".textarea-comment").simulate("change", {
      target: {
        value: "new comment",
      },
    });
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find(".textarea-comment").prop("value")).toEqual(
      "new comment"
    );
  });

  it("when form is submitted, texarea gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find(".textarea-comment").prop("value")).toEqual("");
  });
});
