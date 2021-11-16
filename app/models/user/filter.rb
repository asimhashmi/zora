class User::Filter

    def filter(scope, query_params)
      if query_params[:first_name].present?
        scope = scope.where("first_name ILIKE :text OR last_name ILIKE :text", text: "%#{query_params[:text]}%")
      end
  
      unless query_params[:draft].nil? || query_params[:draft] == ''
        scope = scope.where(draft: query_params[:draft])
      end
  
      if query_params[:category].present?
        scope = scope.where(category: query_params[:category])
      end
  
      scope
    end
  
  end