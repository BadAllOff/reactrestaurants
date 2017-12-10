class Comment < ActiveRecord::Base
  belongs_to :restaurant
  validates :restaurant, presence: true
  has_ancestry

  def self.upvote id
    comment = find(id)
    comment.update_attribute(:rank, comment.rank.to_i + 1)
  end

  def self.downvote id
    comment = find(id)
    comment.update_attribute(:rank, comment.rank.to_i - 1)
  end
end