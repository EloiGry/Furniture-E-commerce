import { useAppStore, StoreState } from "@/lib/store";
import { Product } from "@/types/Product";
import { render } from "@testing-library/react";
import Cuisine from "../Cuisine";


jest.mock("@/lib/store");


const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Hello World',
    image: '/pictureNewslatter.jpg',
    price: 29,
    category: "cuisine"
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Hello World',
    image: '/pictureNewslatter.jpg',
    price: 29,
    category: "cuisine"
  },
];

const mockedUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>;

describe("Cuisine component", () => {
  beforeEach(() => {
    mockedUseAppStore.mockReturnValue({
      products: mockProducts,
    } as Partial<StoreState>);
  });

  it("should render the products with the cuisine category", () => {
    const { getByText } = render(<Cuisine />);
    const productTitle = getByText("Nos Cuisines");
    expect(productTitle).toBeInTheDocument();
    const product1 = getByText("Product 1");
    expect(product1).toBeInTheDocument();
    const product2 = getByText("Product 2");
    expect(product2).toBeInTheDocument();
  });
});