import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageMagnifier from "../ImageMagnifier";

describe("ImageMagnifier", () => {
  test("renders without errors", () => {
    render(<ImageMagnifier src="/PictureNewslatter.jpg" />);
  });

  test("shows magnifier on mouse enter and hides it on mouse leave", () => {
    const { getByAltText, getByTestId } = render(
      <ImageMagnifier src="/PictureNewslatter.jpg" />
    );
    const img = getByAltText("img");
    fireEvent.mouseEnter(img);
    const magnifier = getByTestId("magnifier");
    expect(magnifier).toBeVisible();
    fireEvent.mouseLeave(img);
    expect(magnifier).not.toBeVisible();
  });

  test("updates cursor position on mouse move", () => {
    const { getByAltText, getByTestId } = render(
      <ImageMagnifier src="/PictureNewslatter.jpg" />
    );
    const img = getByAltText("img");
    fireEvent.mouseEnter(img);
    fireEvent.mouseMove(img, { clientX: 50, clientY: 50 });
    const magnifier = getByTestId("magnifier");
    expect(magnifier).toHaveStyle({ top: "-50px", left: "-50px" });
  });
});