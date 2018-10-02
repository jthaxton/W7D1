class Api::TodosController < ApplicationController

  def show
    render json: Todolist.find(params[:id])
  end

  def index
    render json: Todolist.all
  end

  def create
    @todo = Todolist.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todolist.find_by_id(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todolist.find_by_id(params[:id])
    @todo.delete
    render json: { "message": "This is has been deleted" }
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
