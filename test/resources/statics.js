const statics = {
  validImage:
   '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',
  invalidImage:
   '/4AAQSkZJW5W6AtFQCd1JVWAtFOkDSALhVWVgtFNMCttVwopiUxTSxXimtymJpleKKdymKtRyvGcSgDLpgAMKANuQAIAAAAAAmK7hcT'
};

module.exports = statics;