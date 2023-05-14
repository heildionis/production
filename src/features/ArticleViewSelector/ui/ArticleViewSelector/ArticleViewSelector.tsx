import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleViewSelector.module.scss';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/listar.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TileIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, view, onViewClick } = props;
        const { t } = useTranslation();

        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <div
                className={classNames(cls.ArticleViewSelector, {}, [className])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                        key={viewType.view}
                    >
                        <Icon
                            width={24}
                            height={24}
                            Svg={viewType.icon}
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    }
);
