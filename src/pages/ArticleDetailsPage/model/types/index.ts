import { ArticleDetailsCommentSchema } from './AritcleDeatilsCommentSchema';
import { ArticleDetatilsPageRecommendationsSchema } from './ArticleDetatilsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetatilsPageRecommendationsSchema;
}
