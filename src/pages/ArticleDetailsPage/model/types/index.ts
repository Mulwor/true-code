import { ArticleDetailCommentsShema } from './ArticleDetailCommentsSchema';
import { ArticleDetailRecommendationsShema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailCommentsShema;
  recommmendations: ArticleDetailRecommendationsShema;
}
