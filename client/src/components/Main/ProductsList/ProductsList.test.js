import React from "react";
import { shallow } from "enzyme";
import ProductsList from "./ProductsList";

describe("ProductsList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
