Rails.application.routes.draw do
  resources :collections
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  devise_for :users

end
