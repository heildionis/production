import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlePageSlice';

import cls from './ArticlesPageFilters.module.scss';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
    (props: ArticlesPageFiltersProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlesPageView);
        const sort = useSelector(getArticlesPageSort);
        const order = useSelector(getArticlesPageOrder);
        const search = useSelector(getArticlesPageSearch);
        const type = useSelector(getArticlesPageType);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData]
        );

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(newSort));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData]
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlesPageActions.setOrder(newOrder));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData]
        );

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData]
        );

        const onChangeType = useCallback(
            (tab: ArticleType) => {
                dispatch(articlesPageActions.setType(tab));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData]
        );

        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        placeholder={t('Поиск')}
                        value={search}
                        onChange={onChangeSearch}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </div>
        );
    }
);
