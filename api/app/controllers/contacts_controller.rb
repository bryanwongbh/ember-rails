class ContactsController < ApplicationController
	protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
	respond_to :json
  
  def index
    respond_with Contact.all
  end
  
  def show
    respond_with Contact.find(params[:id])
  end
  
  def create
  	respond_with Contact.create(contact_params)
  end
  
  def update
    respond_with Contact.update(params[:id], contact_params)
  end
  
  def destroy
    respond_with Contact.destroy(params[:id])
  end

  private

  	def contact_params
  		params.require(:contact).permit(:first_name, :last_name, :email, :title)
  	end
end