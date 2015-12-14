module API
  module V1
    class Contacts < Grape::API
      include API::V1::Defaults

      helpers do
        def contacts_params
          ActionController::Parameters.new(params).require(:contact).permit(:first_name, :last_name, :email, :title)
        end
      end

      resource :contacts do
        desc "Return all contacts"
        get "", root: :contacts do
          Contact.all
        end

        desc "Return a contact"
        params do
          requires :id, type: String, desc: "ID of the contact"
        end
        get ":id", root: "contact" do
          Contact.where(id: permitted_params[:id]).first!
        end

        desc "Create a contact"
        params do
          group :contact, type: Hash do
            requires :first_name, type: String, desc: "First Name"
            requires :last_name, type: String, desc: "Last Name"
            requires :email, type: String, desc: "Email"
            requires :title, type: String, desc: "Title"
          end
        end
        post do
          Contact.create!({
            first_name: params[:contact][:first_name],
            last_name: params[:contact][:last_name],
            email: params[:contact][:email],
            title: params[:contact][:title]
          })
        end

        desc "Update a contact"
        params do
          requires :id, type: String, desc: "ID of the contact"
          requires :first_name, type: String, desc: "First Name"
          requires :last_name, type: String, desc: "Last Name"
          requires :email, type: String, desc: "Email"
          requires :title, type: String, desc: "Title"
        end
        put do
          Contact.find(params[:id]).update({
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            title: params[:title]
          })
        end

        desc "Delete a contact"
        params do
          requires :id, type: String, desc: "ID of the contact"
        end
        delete ':id' do
          Contact.find(params[:id]).destroy
        end
      end
    end
  end
end