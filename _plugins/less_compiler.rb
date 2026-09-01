Jekyll::Hooks.register :site, :pre_render do |site|
  less_src = File.join(site.source, "assets/css/hbs.less")
  css_dest = File.join(site.source, "assets/dist/css/hbs.css")

  unless system("lessc", "--compress", less_src, css_dest)
    raise "less_compiler: failed to compile #{less_src} (is lessc installed?)"
  end
end
