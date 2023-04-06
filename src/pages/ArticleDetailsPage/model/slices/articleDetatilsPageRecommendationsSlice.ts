import { StateSchema } from 'app/providers/StoreProvider';
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleDetatilsPageRecommendationsSchema } from '../types/ArticleDetatilsPageRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArtilceRecommendations/fetchArtilceRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetatilsPageRecommendationsSlice = createSlice({
    name: 'articleDetatilsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetatilsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: articleDetailsPageRecommendationsActions,
} = articleDetatilsPageRecommendationsSlice;
export const {
    reducer: articleDetailsPageRecommendationsReducer,
} = articleDetatilsPageRecommendationsSlice;
