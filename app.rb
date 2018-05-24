require "sinatra"
require "sendgrid-ruby"

get "/" do 
	@home = "!"
	erb :index
end

get "/about" do 
	@abt = "!"
	erb :about
end

get "/gallery" do 
	@gal = "!"
	erb :gallery
end

get "/todolist" do 
	@list = "!"
	erb :todolist
end


get "/contact" do 
	@cont = "!"
	erb :contact
end

get "/received" do 

	@cont = "!"

	@email = params[:email]
	@subject = params[:subject]
	@content = params[:content]

	from = SendGrid::Email.new(email: @email)
	to = SendGrid::Email.new(email: 'ba.keehan@gmail.com')
	subject = @subject
	content = SendGrid::Content.new(type: 'text/plain', value: @content)
	mail = SendGrid::Mail.new(from, subject, to, content)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	# puts response.parsed_body
	puts response.headers

	erb :received
	
end