export default {
  eleventyComputed: {
    actualitzat: ({ documents }) => {
      const latest = (documents?.items || [])
        .flatMap((group) => group.documents)
        .map((doc) => doc.data)
        .sort()
        .pop();
      return latest ? new Date(latest) : undefined;
    },
  },
};
