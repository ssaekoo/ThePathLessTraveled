class Api::TreksController < ApplicationController
  def index
    @treks = Trek.all
    render :index
  end

  def show
    @trek = Trek.find(params[:id])
    render :show
  end
end
