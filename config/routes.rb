Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :index]
      resource :session, only: [:create, :destroy]
      resources :songs, only: [:create, :index, :show, :update, :destroy] do
        resources :comments, only: [:create]
      end
      resources :comments, only: [:destroy]

    end
     

  root "static_pages#root"
end
