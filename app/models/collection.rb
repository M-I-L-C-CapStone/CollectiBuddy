class Collection < ApplicationRecord
    belongs_to :user
    validates :name, :category, :description, :condition, :image, :user_id, presence: true
end
