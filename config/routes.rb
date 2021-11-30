require 'sidekiq/web'

Rails.application.routes.draw do
  root to: 'home#index'

  resources :meetings
  
  resources :conversations do
    resources :messages
  end
  get '/privacy', to: 'home#privacy'
  get '/terms', to: 'home#terms'
  get '/student', to: 'home#student_home'
  get '/teacher', to: 'home#teacher_home'
  get '/frontendhome', to: 'home#frontend'
  get '/student_dashboard', to: 'home#student_dashboard'

authenticate :user, lambda { |u|  u.is_admin? } do
  mount Sidekiq::Web => '/sidekiq'

  namespace :madmin do
    resources :users
    namespace :active_storage do
      resources :variant_records
    end
    namespace :active_storage do
      resources :blobs
    end
    namespace :active_storage do
      resources :attachments
    end
    resources :services
    resources :announcements
    resources :notifications
    root to: "dashboard#show"
  end
end

  resources :hires
  resources :notifications, only: [:index]
  resources :announcements, only: [:index]
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  resources :users, only: %i[show]
end
