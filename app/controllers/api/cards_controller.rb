# frozen_string_literal: true

class Api::CardsController < ApplicationController
  def create
    list = List.find(params[:list_id])
    @card = Card.new(card_params)
    @card.list_id = list.id

    if @card.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: 404
  rescue ActionController::ParameterMissing
    @error = 'Invalid card data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    @card = Card.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    @error = 'Invalid card data provided'
    render 'api/shared/error', status: 404
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render :update, status: 200
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'Invalid card id provided'
    render 'api/shared/error', status: 404
  rescue ActionController::ParameterMissing
    @error = 'Invalid card data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card)
          .permit(:title,
                  :list_id,
                  :description,
                  :archived,
                  :due_date,
                  :completed,
                  labels: [])
  end
end
