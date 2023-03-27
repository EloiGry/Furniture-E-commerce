import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calendar from "../Calendar";
import Tab1 from "../Tab1";

jest.mock('../Calendar', () => () => <div data-testid="calendarCheck" />)

describe("Tab1 component", () => {
  it("should render Calendar component", () => {
    const { getByTestId } = render(<Calendar />)
    expect(getByTestId(/calendarCheck/)).toBeInTheDocument();
  })
  it("renders the form and fields", () => {
    render(<Tab1 />);
    expect(screen.getByLabelText("Nom")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Téléphone")).toBeInTheDocument();
    expect(screen.getByLabelText("Paris")).toBeInTheDocument();
    expect(screen.getByLabelText("Lyon")).toBeInTheDocument();
    expect(screen.getByLabelText("Marseille")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /envoyer/i })).toBeInTheDocument();
    userEvent.type(screen.getByLabelText("Nom"), "John Doe");
    userEvent.type(screen.getByLabelText("Email"), "john.doe@example.com");
    userEvent.type(screen.getByLabelText("Téléphone"), "0123456789");
    userEvent.click(screen.getByLabelText("Paris"));
    userEvent.type(screen.getByLabelText("Message"), "Ceci est un message de test.");
    userEvent.click(screen.getByRole("button", { name: /envoyer/i }));
  });
});