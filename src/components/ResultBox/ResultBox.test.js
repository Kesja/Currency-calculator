import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';

const testAmount = [
  { amount: '100'},
  { amount: '20'},
  { amount: '200'},
  { amount: '345'},
];

for (const testObj of testAmount) {
  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount}
  />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
    });
    it('should render proper info about conversion when USD -> PLN', () => {
        render(<ResultBox from='USD' to='PLN' amount={testObj.amount} />);
    });
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 100.00 = $28.57');
    });
}