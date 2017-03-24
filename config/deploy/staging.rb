set :stage, :staging

set :deploy_to, -> { "/var/www/vhosts/#{fetch(:application)}" }

# Simple Role Syntax
# ==================
#role :app, %w{deploy@example.com}
#role :web, %w{deploy@example.com}
#role :db,  %w{deploy@example.com}

# Extended Server Syntax
# ======================
# server 'endeavour', user: 'deploy', roles: %w{web app db}
# server 'www-ch.stage.ttss.ch', user: 'deploy', roles: %w{web app db}
server 'compute-01.stage.ginetta.net', user: 'deploy', roles: %w{web app db}, port: 2232

# you can set custom ssh options
# it's possible to pass any option but you need to keep in mind that net/ssh understand limited list of options
# you can see them in [net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start)
# set it globally
#  set :ssh_options, {
#    keys: %w(~/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }

fetch(:default_env).merge!(wp_env: :staging)