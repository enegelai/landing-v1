function getNameFromPath(relativePath) {
  return relativePath.split('/').pop().split('.')[0]
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}

export { getNameFromPath, formatDate }
