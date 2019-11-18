import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import "jest-styled-components";
import TestComponent from "./Component";

configure({ adapter: new Adapter() });

describe("Test", () => {
  it("should match snapshot", () => {
    const instance = shallow(<TestComponent />);
    expect(shallow(<TestComponent />)).toMatchSnapshot();
  });
});
