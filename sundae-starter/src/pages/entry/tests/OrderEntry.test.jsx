import { render, screen } from '@testing-library/react'
import { test, describe } from 'vitest'
import OrderEntry from '../OrderEntry'
import { server } from '../../../mocks/server'
import { HttpResponse, http } from 'msw'

describe("pages/entry/OrderEntry", () => {
    test("handles error for scoops and toppings routes", async () => {
        server.resetHandlers(
          http.get("http://localhost:3030/scoops", () => {
            return new HttpResponse(null, { status: 500 });
          }),
          http.get("http://localhost:3030/toppings", () => {
            return new HttpResponse(null, { status: 500 });
          })
        );
      
        render(<OrderEntry />);
      
        const alerts = await screen.findAllByRole("alert");
        expect(alerts).toHaveLength(2);
      });
})

