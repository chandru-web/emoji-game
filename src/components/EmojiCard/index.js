// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onAddIdToArray} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onAddIdAndShuffleEmoji = () => {
    onAddIdToArray(id)
  }
  return (
    <li className="emoji-item">
      <button
        className="emoji-button"
        type="button"
        onClick={onAddIdAndShuffleEmoji}
      >
        <div className="emoji-card">
          <img src={emojiUrl} alt={emojiName} className="emoji-img" />
        </div>
      </button>
    </li>
  )
}
export default EmojiCard
