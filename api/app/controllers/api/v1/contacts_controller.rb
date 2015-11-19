module Api
  module V1
    class ContactsController < ApplicationController

      def index
        render json: Contact.all
      end


      # def show
      #   set = Contact.find(params[:id])
      #   if set.public? || current_user == set.user
      #     render json: get_json(set, true)
      #   else
      #     render json: {error: 'Forbidden'}, :status => 403
      #   end
      # end


      private

      def set_params
        params.require(:card_set).permit(:name)
      end


      # def get_json(data, includeRelats=false)
      #   included = includeRelats ? ['cards','tags'] : []
      #   setSerializer = JSONAPI::ResourceSerializer.new(
      #       ContactResource, include: included,
      #       fields: {
      #           cards: [:card_set, :front, :back],
      #           tags:  [:card_set, :name]
      #       }
      #   )
      #   if data.kind_of?(Array)
      #     resources = data.map {|set| ContactResource.new set}
      #   else
      #     resources = ContactResource.new data
      #   end

      #   setSerializer.serialize_to_hash resources
      # end
    end
  end
end
