class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6 , allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      if user && user.is_password?(passsword)
          return user
      else
        return nil
      end
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
    end
end
