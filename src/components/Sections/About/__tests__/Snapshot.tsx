import { render } from '@testing-library/react'
import Timeline from '../Timeline'

it('renders timeline unchanged', () => {
  const { container } = render(<Timeline />)
  expect(container).toMatchSnapshot()
})