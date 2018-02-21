source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby "2.4.2"

gem "rails", "~> 5.1.5"

gem "coffee-rails", "~> 4.2"

gem "aasm"
gem "active_model_serializers"
gem "sass-rails", "~> 5.0"
gem "pg", "~> 1.0.0"
gem "puma", "~> 3.7"
gem "taperole", "~> 2.0"
gem "uglifier", ">= 1.3.0"
gem "webpacker"

group :development, :test do
  gem "annotate"
  gem "awesome_print"
  gem "brakeman", "~> 3.5"
  gem "bundler-audit"
  gem "codeclimate-test-reporter", "~> 1.0.0"
  gem "database_cleaner"
  gem "factory_bot_rails"
  gem "faker"
  gem "pry-byebug"
  gem "rspec-rails"
  gem "rubocop"
  gem "shoulda-matchers"
  gem "simplecov"
end

group :development do
  gem "foreman"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "web-console", ">= 3.3.0"
end
