import React from "react";
import { shallow } from "enzyme";
import DescriptionParagraph from "./DescriptionParagraph";

describe("DescriptionParagraph", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DescriptionParagraph />);
    expect(wrapper).toMatchSnapshot();
  });
});
