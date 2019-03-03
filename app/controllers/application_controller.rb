class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    # postman testing
    # skip_before_action :verify_authenticity_token, raise: false

    helper_method :current_user, :logged_in?

    def login(user)
      session[:session_token] = user.reset_session_token!
      @current_user = user
    end

    def current_user
      @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
      !!current_user
    end

    def require_login
      render json: ['invalid credentials'], status: 401 unless logged_in? #{ base: ['invalid credentials'] },
    end

    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
    end


end
