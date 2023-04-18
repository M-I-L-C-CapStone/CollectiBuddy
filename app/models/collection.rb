class Collection < ApplicationRecord
    belongs_to :user
    validates :name, :category, :description, :condition, :image, presence: true
end
