Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :home]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :show, :index, :destroy]
  end
end
