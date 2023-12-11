import React from "react";
import { shallow } from 'enzyme';
import Header from "./index";

describe('Heder Component', () => {
  // describe('Nested', () => {
  it('It should render without errors', () => {
    // expect(1).toBe(3);
    const component = shallow(<Header />);
    console.log(component.debug());
    const wrapper = component.find('.headerComponet');
    expect(wrapper.length).toBe(1);
  });
  // });
});