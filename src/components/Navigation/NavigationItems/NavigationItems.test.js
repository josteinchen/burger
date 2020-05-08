import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavgationItem from "../NavigationItem/NaviagationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavgationItem)).toHaveLength(2);
  });

  it("should render three <NavigationItem /> elements if  authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavgationItem)).toHaveLength(3);
  });

  it("should an exact logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavgationItem link='/logout'>Logout</NavgationItem>)
    ).toEqual(true);
  });
});
