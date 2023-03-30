import { useAppStore, StoreState } from "@/lib/store";
import { Product } from "@/types/Product";
import { render } from "@testing-library/react";
import SalledeBain from "../SalleDeBain";


jest.mock("@/lib/store");


const mockProducts: Product[] = [
  {
    id: 3,
    name: 'Product 3',
    description: 'Hello World',
    image: '/pictureNewslatter.jpg',
    price: 29,
    category: "salle de bain"
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Hello World',
    image: '/pictureNewslatter.jpg',
    price: 29,
    category: "salle de bain"
  },
];

const mockedUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>;

describe("Cuisine component", () => {
  beforeEach(() => {
    mockedUseAppStore.mockReturnValue({
      products: mockProducts,
    } as Partial<StoreState>);
  });

  it("should render the products with the salle de bains category", () => {
    const { getByText } = render(<SalledeBain />);
    const productTitle = getByText("Nos Salles de bains");
    expect(productTitle).toBeInTheDocument();
    const product3 = getByText("Product 3");
    expect(product3).toBeInTheDocument();
    const product4 = getByText("Product 4");
    expect(product4).toBeInTheDocument();
  });
});