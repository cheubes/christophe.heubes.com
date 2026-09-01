Jekyll::Hooks.register :site, :pre_render do |site|
  less_src = File.join(site.source, "assets/css/hbs.less")
  css_dest = File.join(site.source, "assets/dist/css/hbs.css")

  compiled = IO.popen(["lessc", "--compress", less_src], &:read)
  raise "less_compiler: failed to compile #{less_src} (is lessc installed?)" unless $?.success?

  # Only touch the file when the content actually changes: `jekyll serve --watch`
  # watches site.source, and an unconditional write would retrigger itself forever.
  File.write(css_dest, compiled) unless File.exist?(css_dest) && File.read(css_dest) == compiled
end
