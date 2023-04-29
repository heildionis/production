import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button Test', () => {
    test(('To Be Rendered'), () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test(('To Have Class Clear'), () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
