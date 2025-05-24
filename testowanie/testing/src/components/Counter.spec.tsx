import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

const fireEvent = userEvent.setup();

describe('Counter', () => {

    it('initial value should be rendered', () => {

        render(<Counter />);
        const counterElement = screen.getByTestId('counter-value');

        expect(counterElement).toHaveTextContent(/^0$/);
    })

    it('custom initial value should be rendered', () => {

        render(<Counter initialValue={100} />);
        const counterElement = screen.getByTestId('counter-value');

        expect(counterElement).toHaveTextContent(/^100$/);
    })

    it('should incerement counter value after click the button', async () => {

        render(<Counter />);
        const counterElement = screen.getByTestId('counter-value');
        const incrementElement = screen.getByTestId('counter-increment');
        const decrementElement = screen.getByTestId('counter-decrement');

        await fireEvent.click(incrementElement);

        expect(counterElement).toHaveTextContent(/^1$/);

        await fireEvent.click(decrementElement);

        expect(counterElement).toHaveTextContent(/^0$/);
    
    });
});