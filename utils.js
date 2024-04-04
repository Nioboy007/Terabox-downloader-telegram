const sendFile = async (i tem, ctx) => {
  if (item) {
    try {
      await ctx.replyWithDocument(item);
    } catch (e) {
      // Sending the first error message
      await ctx.replyWithMarkdown(`⚠️ ${e.message} \n Try Downloading the below link manually` );
      
      // Sending the second message with the link
      await ctx.replyWithMarkdown(
        `${item}`,
      );
    }
  }
};

module.exports = {
  sendFile,
};
