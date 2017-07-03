Rails.application.routes.draw do
  root 'static_pages#index'
  get "*all", to: 'static_pages#index'
end
