Rails.application.routes.draw do
  get 'maps/index'
  root 'maps#index'
  get "up" => "rails/health#show", as: :rails_health_check
end
