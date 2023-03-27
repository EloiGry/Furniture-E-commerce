import { render, screen, fireEvent } from "@testing-library/react";
import Tab2 from "../Tab2";

describe("Tab2 component", () => {
  it("renders the component", () => {
    render(<Tab2 />);
    const sectionElement = screen.getByTestId("tab2-section");
    expect(sectionElement).toBeInTheDocument();
  });

  it("submits the form with user input", () => {
    render(<Tab2 />);
    const nameInput = screen.getByLabelText("Nom");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Téléphone");
    const messageTextarea = screen.getByLabelText("Message");
    const submitButton = screen.getByRole("button", { name: "Envoyer" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
    fireEvent.change(messageTextarea, { target: { value: "Test message" } });

    fireEvent.click(submitButton);

    expect((nameInput as HTMLInputElement).value).toBe("John Doe");
    expect((emailInput as HTMLInputElement).value).toBe("johndoe@example.com");
    expect((phoneInput as HTMLInputElement).value).toBe("123-456-7890");
    expect((messageTextarea as HTMLTextAreaElement).value).toBe("Test message");
  });
});