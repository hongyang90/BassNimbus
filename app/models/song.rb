class Song < ApplicationRecord
    validates :title, presence: true

    belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

    # add assiciations for pictures and audio files
end
