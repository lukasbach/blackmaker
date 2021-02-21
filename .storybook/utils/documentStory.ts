export const documentStory = (story: any, storyDescription: string) => {
  story.parameters = { docs: { storyDescription } };
};
