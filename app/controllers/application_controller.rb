class ApplicationController < ActionController::Base
  #TODO replace this with some proper authn
  def current_user
    User.first
  end
end