import React from "react"
import { render, screen } from '@testing-library/react';
import App from './App';
import { MainPage } from "../components"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




beforeEach(() => render(<MainPage />))

describe("Main Page mount", () => {
  it("must display the main page title", () => {
    expect(
        screen.getByRole("heading", { name: /simpsons quotes/i })
    ).toBeInTheDocument()
  })
})



describe("Quotes List", () => {
  it("must display 3 quotes", async () => {
    expect(await screen.findAllByRole("listitem")).toHaveLength(3)
  })

})it("must contain quote value", async () => {
  const [firstQuote] = await screen.findAllByRole("listitem")
  expect(firstQuote.textContent).toBe("Gah, stupid sexy Flanders!")
})

