import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError(true);
    };

    return (
        <Button onClick={onThrow}>Throw</Button>
    );
};