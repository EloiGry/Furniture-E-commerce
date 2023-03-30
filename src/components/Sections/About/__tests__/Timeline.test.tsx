import { render } from "@testing-library/react";
import Timeline from "../Timeline";

describe("Timeline component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Timeline />);
    expect(getByText("Morbi tempor")).toBeInTheDocument();
    expect(getByText("Vestibulum diam nunc")).toBeInTheDocument();
    expect(getByText("Donec porta enim vel")).toBeInTheDocument();
    expect(getByText("Dec 2020")).toBeInTheDocument();
    expect(getByText("Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.")).toBeInTheDocument();
    expect(getByText("Aliquam sit amet nunc ut")).toBeInTheDocument();
    expect(getByText("Jul 2019")).toBeInTheDocument();
    expect(getByText("Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.")).toBeInTheDocument();
    expect(getByText("Pellentesque habitant morbi")).toBeInTheDocument();
    expect(getByText("Jan 2016")).toBeInTheDocument();
    expect(getByText("Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.")).toBeInTheDocument();
  });
});
