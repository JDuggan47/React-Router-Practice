Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  get 'battles', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :battles
    end
  end

end
