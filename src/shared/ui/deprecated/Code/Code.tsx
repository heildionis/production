import { FC, memo, useCallback } from 'react';

import { Button, ButtonTheme } from '../Button/Button';

import cls from './Code.module.scss';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
