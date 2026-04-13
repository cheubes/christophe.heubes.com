Jekyll::Hooks.register :site, :post_write do |site|
  next unless system("which purgecss > /dev/null 2>&1")

  css_file = File.join(site.dest, "assets/dist/css/bootstrap-utilities.min.css")
  next unless File.exist?(css_file)

  content_glob = File.join(site.dest, "**/*.html")

  system("purgecss --css #{css_file} --content '#{content_glob}' --output #{File.dirname(css_file)}")
  Jekyll.logger.info "PurgeCSS:", "bootstrap-utilities.min.css optimized (#{File.size(css_file) / 1024}KB)"
end
