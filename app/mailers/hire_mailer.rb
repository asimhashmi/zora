class HireMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def hiring_email
    @hire = params[:hire]
    @url  = 'http://localhost:3000/'
    mail(to: @hire.hire_to.email, subject: 'Hiring Request')
  end

  def contract_email
    @hire = params[:hire]
    @url  = 'http://localhost:3000/'
    mail(to: @hire.hire_to.email, subject: 'Hiring Request')
  end

  def end_contract_email
    @hire = params[:hire]
    @url  = 'http://localhost:3000/'
    mail(to: @hire.hire_to.email, subject: 'Hiring Request')
  end
end
