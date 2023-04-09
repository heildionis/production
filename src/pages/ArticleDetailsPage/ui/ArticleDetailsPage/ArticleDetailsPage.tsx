import { ArticleDetails, ArticleList, getArticleDetailsData } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slices';
import { fetchArticleRecommendations } from '../../model/services/fetchArtilceRecommendations/fetchArtilceRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations/recommendations';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetatilsPageRecommendationsSlice';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import {
    getArticleCommentsError,
} from '../../model/selectors/comments/getArticleCommentsError/getArticleCommentsError';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ArticleDeatilsPageHeader } from '../ArticleDeatilsPageHeader/ArticleDeatilsPageHeader';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap='16' fullWidth>
                    <ArticleDeatilsPageHeader />
                    <ArticleDetails id={id} />
                    {article && (
                        <>
                            <Text size={TextSize.L} className={cls.title} title={t('Рекомендуем')} />
                            <ArticleList
                                articles={recommendations}
                                className={cls.recommendations}
                                isLoading={recommendationsIsLoading}
                                target='_blank'
                            />
                            <Text size={TextSize.L} className={cls.title} title={t('Комментарии')} />
                            <AddCommentForm onSendComment={onSendComment} />
                            <CommentList
                                isLoading={commentsIsLoading}
                                comments={comments}
                            />
                        </>
                    )}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
