import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDeatilsPageHeader } from '../ArticleDeatilsPageHeader/ArticleDeatilsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo(
    (props: ArticleDetailsPageProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');

        const { id } = useParams<{ id: string }>();

        if (!id) {
            return (
                <Page
                    className={classNames(cls.ArticleDetailsPage, {}, [
                        className,
                    ])}
                >
                    {t('Статья не найдена')}
                </Page>
            );
        }

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <Page
                    className={classNames(cls.ArticleDetailsPage, {}, [
                        className,
                    ])}
                >
                    <VStack gap='16' fullWidth>
                        <ArticleDeatilsPageHeader />
                        <ArticleDetails id={id} />
                        <ArticleRating articleId={id} />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </VStack>
                </Page>
            </DynamicModuleLoader>
        );
    }
);

export default ArticleDetailsPage;
