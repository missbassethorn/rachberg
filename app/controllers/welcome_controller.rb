class WelcomeController < ApplicationController
  def hello
    @name = params[:name] || "you handsome beast"
  end
end
