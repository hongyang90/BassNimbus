class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
