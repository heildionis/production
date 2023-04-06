import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import {
    articleDetailsPageRecommendationsReducer,
} from './articleDetatilsPageRecommendationsSlice';
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentReducer,
});
