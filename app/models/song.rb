class Song < ApplicationRecord
    validates :title, :artist_id, presence: true

    belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Comment

    has_one_attached :sound
    has_one_attached :photo
    # add assiciations for pictures and audio files
end
