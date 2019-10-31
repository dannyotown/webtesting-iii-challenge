// Test away!
// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from "../dashboard/Dashboard";
import Controls from '../controls/Controls';

test('Render the heading', ()=>{
    const wrapper = rtl.render(<Dashboard />);
    const ele = wrapper.getByText(/locked/i)
    expect(ele).toBeVisible();
    // wrapper.debug(wrapper.getByText('The Dog Website'))
    // wrapper.debug(wrapper.queryByPlaceholderText('Image Count'))
})

test("button changes if clicked",() => {
    const { getByText, findByText } = rtl.render(<Controls />)
    const btn1 = getByText(/close gate/i)
    rtl.act(() => {
        fireEvent.click(btn1)
    })
})
