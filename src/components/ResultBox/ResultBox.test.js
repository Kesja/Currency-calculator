import ResultBox from './ResultBox';
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from '@testing-library/react';

const testArr = [ 100, 20, 200, 345];

const lessThenZero = [
  { amount: '-100', from: 'PLN', to: 'USD' },
  { amount: '-20', from: 'USD', to: 'PLN' },
  { amount: '-200', from: 'PLN', to: 'USD' },
  { amount: '-345', from: 'USD', to: 'PLN' },
];

describe('Component ResultBox', () => {

  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 100.00 = $28.57');
  });

  it('should render proper info about conversion when USD -> PLN', () => {
    render(<ResultBox from='USD' to='PLN' amount={100} />);
  });

  it('should render proper info about conversion when USD -> USD', () => {
    render(<ResultBox from='USD' to='USD' amount={100} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('$100.00 = $100.00');
  });

  it('should render proper info about conversion when PLN -> PLN', () => {
    render(<ResultBox from='PLN' to='PLN' amount={100} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 100.00 = PLN 100.00');
  });

  it('should render without crashing when different amount', () => {
    for (const testAmount of testArr) {
    render(<ResultBox from='PLN' to='USD' amount={testAmount} />);
    }
  });

  it('should render proper info if value less then zero', () => {
    for (const testAmount of lessThenZero) {
      render(<ResultBox from={testAmount.from} to={testAmount.to} amount={parseInt(testAmount.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent('Wrong value');
      cleanup();
    };
  });
});



