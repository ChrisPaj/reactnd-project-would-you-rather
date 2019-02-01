export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatPoll (poll, author, authedUser) {
  const { id, optionOne, optionTwo, question, timestamp, } = poll
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    question,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    hasAnswered: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser),
    }
  }