'use server';
/**
 * @fileOverview An AI agent that provides personalized product recommendations based on user browsing history.
 *
 * - getPersonalizedRecommendations - A function that generates personalized product recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the user\'s browsing history.'),
  numberOfRecommendations: z
    .number()
    .default(3)
    .describe('The number of product recommendations to return.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of product IDs representing the personalized product recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a personal shopping assistant for AWKWARD E-Commerce, specializing in providing personalized product recommendations based on a user\'s browsing history.

  Given the following browsing history of product IDs:
  {{#each browsingHistory}}
  - {{{this}}}
  {{/each}}

  Recommend {{numberOfRecommendations}} products from AWKWARD E-Commerce that align with the user\'s style and preferences as inferred from their browsing history.  Return only the product IDs in an array.
  Do not provide any explanation, just the product IDs. Ensure that recommendations are diverse and cover different categories, while still being relevant to the user\'s taste.
  Ensure you return a JSON array of strings.
  `,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
