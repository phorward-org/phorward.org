import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'

jest.mock('../../providers/AppProvider', () => ({
  useAppState: () => ({
    mobile: true,
    view: 'song',
    modal: true,
    menu: false,
    setAppState: () => {},
  }),
}))

describe('Modal', () => {
  const wrapper = shallow(<Modal />)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#Modal')
    expect(c.length).toBe(1)
  })
})
