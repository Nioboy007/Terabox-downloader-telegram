const sendFile = async (item, ctx) => {
  if (item) {
    try {
      await ctx.replyWithDocument(item);
    } catch (e) {
      // Sending the first error message
      await ctx.replyWithMarkdown(`⚠️ ${e.message} \n Try Downloading the below link manually,\n OR \n Use Our [Url Uploader Bot](https://t.me/UrlUploaderio_bot) to upload remotely to telegram` );
      
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
