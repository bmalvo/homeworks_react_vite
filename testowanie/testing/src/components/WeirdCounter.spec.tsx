import { render, screen } from "@testing-library/react";
import { WeirdCounter } from "./WeirdCounter";
import userEvent from "@testing-library/user-event";
import * as randomHook from './hooks/useRandomValue';

describe('WeirdCounter', () => {

    const fireEvent = userEvent.setup();

    /// mocking
    // vi.mock('./hooks/useRandomValue', async(importOriginal) => ({

    //     ... await importOriginal(),
    //     useRandomValue: () => {

    //         return () => 999
    //     }
    // }))

    it('initial value should be rendered', () => {
    
        render(<WeirdCounter />);
        const counterElement = screen.getByTestId('counter-value');
        
        expect(counterElement).toHaveTextContent(/^0$/);
    })
    
    it('should set random counter value after click the button', async () => {
        
            vi.spyOn(randomHook, 'useRandomValue').mockReturnValueOnce(() => 999)
            render(<WeirdCounter />);
            const counterElement = screen.getByTestId('counter-value');
            const incrementElement = screen.getByTestId('counter-increment');
    
            await fireEvent.click(incrementElement);
    
            expect(counterElement).toHaveTextContent(/^999$/);
        
        });
})
