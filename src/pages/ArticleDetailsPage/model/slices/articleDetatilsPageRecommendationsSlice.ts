import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { fetchArticleRecommendations } from '../services/fetchArtilceRecommendations/fetchArtilceRecommendations';
import { ArticleDetatilsPageRecommendationsSchema } from '../types/ArticleDetatilsPageRecommendationsSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState()
    );

const articleDetatilsPageRecommendationsSlice = createSlice({
    name: 'articleDetatilsPageRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetatilsPageRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendationsActions } =
    articleDetatilsPageRecommendationsSlice;
export const { reducer: articleDetailsPageRecommendationsReducer } =
    articleDetatilsPageRecommendationsSlice;
