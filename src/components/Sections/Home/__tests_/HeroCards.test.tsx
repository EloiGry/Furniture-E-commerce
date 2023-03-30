import { render, screen, fireEvent } from "@testing-library/react";
import { HeroCard } from "../HeroCards";

describe("HeroCard", () => {
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {});
      });
  const id = "1";
  const imgUrl = "/PictureNewslatter.png";
  const index = 0;
  const active = "1";
  const handleClick = jest.fn();
  const title = "Card title";
  const slug = "card-title";

  it("renders with correct props", () => {
    render(
      <HeroCard
        id={id}
        imgUrl={imgUrl}
        index={index}
        active={active}
        handleClick={handleClick}
        title={title}
        slug={slug}
      />
    );

    expect(screen.getByAltText("mainImages")).toHaveAttribute("src", expect.stringContaining("PictureNewslatter.png"));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("calls handleClick function when clicked", () => {
    render(
      <HeroCard
        id={id}
        imgUrl={imgUrl}
        index={index}
        active={active}
        handleClick={handleClick}
        title={title}
        slug={slug}
      />
    );

    fireEvent.click(screen.getByText(title));
    expect(handleClick).toHaveBeenCalledWith(id);
  });
});