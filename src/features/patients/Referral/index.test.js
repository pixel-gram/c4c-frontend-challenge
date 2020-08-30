import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, wait, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PatientReferral from '.';

import RootWrappers from '../../setup/RootWrappers';
import '../../../test/utils';
import { generateStore } from '../../../redux';

const server = setupServer(
  rest.post('/api/referrals', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)
let store
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  store = generateStore();
  server.resetHandlers()
})
afterAll(() => server.close())

test('displays form', async () => {
  render(<RootWrappers store={store}><PatientReferral /></RootWrappers>)
  expect(screen.getAllByText('First Name').length).toEqual(1)
})
test('add to form', async () => {
  render(<RootWrappers store={store}><PatientReferral /></RootWrappers>)
  expect(screen.getAllByText('First Name').length).toEqual(1)
  fireEvent.click(screen.getByText('add another patient', {exact: false}))
  await wait(()=>(screen.getAllByText('First Name').length == 2))
})
test('fill out form submission fails and then succeeds', async ()=>{
  const {queryByText, getByLabelText} = render(<RootWrappers store={store}><PatientReferral /></RootWrappers>);
  fireEvent.click(screen.getByText('Send Referrals'))
  expect(queryByText("Success", { exact: false})).toBe(null)
  const firstNameInput = getByLabelText("First Name", {exact: false})
  fireEvent.change(firstNameInput, { target: { value: 'Foo' } })
  const lastNameInput = getByLabelText("Last Name", {exact: false})
  fireEvent.change(lastNameInput, { target: { value: 'Bar' } })
  const phoneInput = getByLabelText("Phone", {exact: false})
  fireEvent.change(phoneInput, { target: { value: '647' } })
  const emailInput = getByLabelText("Email", {exact: false})
  fireEvent.change(emailInput, { target: { value: 'l2@x.com' } })
  const languageInput = getByLabelText("Language", {exact: false})
  fireEvent.change(languageInput, { target: { value: 'English' } })
  const dobInput = getByLabelText("Date of Birth", {exact: false})
  fireEvent.change(dobInput, { target: { value: '10/10/1980' } })
  const locationInput = getByLabelText("Address", {exact: false})
  fireEvent.change(locationInput, { target: { value: 'Toronto' } })
  fireEvent.submit(screen.getByTestId('submissionForm'))
  await wait(()=>(screen.getByTestId('successMessage')))
})