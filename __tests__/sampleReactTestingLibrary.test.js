import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Header from 'Components/Header'

afterEach(cleanup)

it('should display the site title', () => {
  const utils = render(<Header siteTitle="FCC JAMstack" />)

  expect(utils.getByText('FCC JAMstack')).toBeTruthy()
})
