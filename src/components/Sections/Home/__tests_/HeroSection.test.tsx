import { render, screen} from '@testing-library/react';
import HeroSection, { MyType } from '../HeroSection';
import userEvent from '@testing-library/user-event'; 


const mockCards: MyType[] = [
  { imgUrl: 'hero1', id: '1', title: 'Salons', slug: 'salon' },
  { imgUrl: 'hero2', id: '2', title: 'Salles de bains', slug: 'salledebain' },
  { imgUrl: 'hero3', id: '3', title: 'Cuisines', slug: 'cuisine' }
];

describe('HeroSection', () => {
  it('should render all hero cards', () => {
    render(<HeroSection />);
    const heroCards = screen.getAllByTestId(/hero-card-/)
    expect(heroCards).toHaveLength(mockCards.length);
  });

  it('should set the correct active card when clicked', () => {
    render(<HeroSection />);
    const firstCard = screen.getByTestId('hero-card-0')
    const secondCard = screen.getByTestId('hero-card-1');
    userEvent.click(secondCard);
    expect(firstCard).not.toHaveClass("lg:flex-[3.5] flex-[10]")
    expect(secondCard).toHaveClass("lg:flex-[3.5] flex-[10]")
  });
});