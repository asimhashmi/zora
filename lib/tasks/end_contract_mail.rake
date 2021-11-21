desc "End Contract"

task :end_contract_mail => :environment do |_, args|
  Hire.find_each do |hire|
    HireMailer.with(hire: hire).end_contract_email.deliver_now if hire.end_contract.to_date == 3.days.from_now.to_date
  end
end